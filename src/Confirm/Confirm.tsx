import React, { useState } from "react"
import * as AlertDialog from "@radix-ui/react-alert-dialog"
import { motion, AnimatePresence } from "framer-motion"
import Backdrop from "../Backdrop/Backdrop"
import type { ButtonProps } from "../Button/Button"
import Button from "../Button/Button"

type ConfirmProps = {
  title?: string
  description?: string
  onConfirm?: () => void
  onCancel?: () => void
  confirmLabel?: string
  confirmVariant?: "primary" | "secondary" | "black"
  cancelLabel?: string
  children: React.ReactNode
  asyncStatus?: boolean
  defaultOpen?: boolean
  open?: boolean
  onChange?: (open: boolean) => void
  confirmProps?: ButtonProps
  cancelProps?: ButtonProps
}

type ConfirmContentProps = {
  title?: string
  description?: string
  confirmLabel?: string
  confirmVariant?: "primary" | "secondary" | "black"
  cancelLabel?: string
  onConfirm?: () => void
  onCancel?: () => void
  asyncStatus?: boolean
  isControlled?: boolean
  isOpen?: boolean
  confirmProps?: ButtonProps
  cancelProps?: ButtonProps
}

type ConfirmTriggerProps = {
  children: React.ReactNode
}

export const Confirm = ({
  title = "أنت متيقن من تنفيذ الطلب؟",
  description = "بمجرد اتخاذك لهذا الاجراء, لا يمكنك العوده.",
  onConfirm,
  onCancel,
  confirmLabel = "تأكيد",
  confirmVariant = "black",
  cancelLabel = "إلغاء",
  children,
  asyncStatus = false,
  open,
  onChange,
  defaultOpen,
  confirmProps,
  cancelProps
}: ConfirmProps) => {
  // A component can be considered controlled when its value prop is
  // not undefined.
  const isControlled = typeof open != "undefined"
  // When a component is not controlled, it can have a defaultValue.
  const hasDefaultOpen = typeof defaultOpen != "undefined"
  // If a defaultValue is specified, we will use it as our initial
  // state.  Otherwise, we will simply use an empty string.
  const [internalOpen, setInternalOpen] = useState(
    hasDefaultOpen ? defaultOpen : false
  )

  // Internally, we need to deal with some value. Depending on whether
  // the component is controlled or not, that value comes from its
  // props or from its internal state.
  const isOpen = isControlled ? open : internalOpen

  const onOpenChange = (opened: boolean) => {
    if (onChange) {
      onChange(opened)
    }

    // If the component is uncontrolled, we need to update our
    // internal value here.
    if (!isControlled) {
      setInternalOpen(opened)
    }
  }

  return (
    <AlertDialog.Root open={isOpen} onOpenChange={onOpenChange}>
      {children}
      <AlertDialog.Portal >
        <div className="fixed inset-0 overflow-y-auto z-30 h-screen">
          <AlertDialog.Overlay asChild>
            <motion.div
              key={`modal-${new Date().toDateString()}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                opacity: { duration: 0.2 },
                duration: 0.3,
                type: "linear"
              }}
              exit={{ opacity: 0 }}
            >
              <Backdrop />
            </motion.div>
          </AlertDialog.Overlay>

          <AnimatePresence>
            <ConfirmContent
              title={title}
              isOpen={isOpen}
              description={description}
              confirmLabel={confirmLabel}
              confirmVariant={confirmVariant}
              cancelLabel={cancelLabel}
              onConfirm={onConfirm}
              onCancel={onCancel}
              asyncStatus={asyncStatus}
              isControlled={isControlled}
              confirmProps={confirmProps}
              cancelProps={cancelProps}
            />
          </AnimatePresence>
        </div>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}

const ConfirmTitle = ({ children }: ConfirmTriggerProps) => {
  return <AlertDialog.Trigger asChild>{children}</AlertDialog.Trigger>
}

const ConfirmContent = ({
  title,
  description,
  confirmLabel,
  confirmVariant,
  cancelLabel,
  onConfirm,
  onCancel,
  asyncStatus,
  isControlled,
  isOpen,
  confirmProps,
  cancelProps
}: ConfirmContentProps) => {
  return isOpen ? (
    <motion.div
      key={new Date().toDateString()}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        opacity: { duration: 0.2 },
        duration: 0.3,
        type: "linear"
      }}
      exit={{ opacity: 0, y: -100 }}
    >
      <AlertDialog.Content
        onEscapeKeyDown={(event) => event.preventDefault()}
        forceMount
        className=" fixed top-8 left-[50%] -ml-[220px]  w-[440px] rounded-xl bg-card-bg-color p-5 shadow-overlap-shadow focus:outline-none"
      >
        <AlertDialog.Title className="text-primary-tex mb-3 m-0 text-[18px] font-medium">
          {title}
        </AlertDialog.Title>
        {description ? (
          <AlertDialog.Description className="text-secondary-text leading-normal">
            {description}
          </AlertDialog.Description>
        ) : null}
        <div className="flex justify-end gap-3 mt-5">
          {asyncStatus ? null : (
            <AlertDialog.Cancel asChild>
              <Button type="button" rounded onClick={onCancel}>
                <span className="px-4">{cancelLabel}</span>
              </Button>
            </AlertDialog.Cancel>
          )}
          {isControlled ? (
            <Button
              type="button"
              rounded
              loading={asyncStatus}
              variant={confirmVariant}
              disabled={asyncStatus}
              onClick={onConfirm}
              {...confirmProps}
            >
              <span className="px-4">{confirmLabel}</span>
            </Button>
          ) : (
            <AlertDialog.Action asChild>
              <Button
                type="button"
                rounded
                variant={confirmVariant}
                onClick={onConfirm}
                {...cancelProps}
              >
                <span className="px-4">{confirmLabel}</span>
              </Button>
            </AlertDialog.Action>
          )}
        </div>
      </AlertDialog.Content>
    </motion.div>
  ) : null
}

Confirm.Trigger = ConfirmTitle
