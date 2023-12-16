import React, { ReactElement, useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { motion, AnimatePresence } from "framer-motion"
import Backdrop from "../Backdrop/Backdrop"
import CloseButton from "../CloseButton/CloseButton"
import type { Size } from "../components.type"

type ModalProps = {
  children: React.ReactNode
  modal?: boolean
  open?: boolean
  onChange?: ((open: boolean) => void) | undefined
  defaultOpen?: boolean
}

type TriggerProps = {
  children: React.ReactNode
  asChild?: boolean | undefined
}

type ContentProps = {
  children: React.ReactNode
  size?: Size | "fullwidth"
  closable?: boolean
  headerBackground?: string 
  title?: string | ReactElement
  isTitleCentered?: boolean
  description?: string
  open?: boolean
  fullheight?: boolean
}

// helper function
const renderSize = (size: string): string => {
  switch (size) {
    case "xs":
      return "w-[96%] md:w-80"
    case "sm":
      return "w-4/5 md:w-[520px]"
    case "lg":
      return "w-[96%] md:w-[795px]"
    case "xl":
      return "w-[96%] md:w-[1024px]"
    case "fullwidth":
      return "w-screen h-screen"
    // md
    default:
      return "w-[96%] md:w-[640px]"
  }
}

// main compoent
export const Modal = ({
  children,
  modal = true,
  open,
  onChange,
  defaultOpen
}: ModalProps) => {
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
    <Dialog.Root modal={modal} open={isOpen} onOpenChange={onOpenChange}>
      {children}
    </Dialog.Root>
  )
}

const ModalTrigger = ({ children, asChild = true }: TriggerProps) => {
  return <Dialog.Trigger asChild={asChild}>{children}</Dialog.Trigger>
}

const ModalContent = ({
  children,
  size = "md",
  closable = true,
  title,
  headerBackground = "bg-transparent",
  isTitleCentered = true,
  description,
  open,
  fullheight = false,
  ...props
}: ContentProps) => {
  return (
    <AnimatePresence>
      {open ? (
        <Dialog.Portal forceMount>
          <div className="fixed inset-0 overflow-y-auto z-30 h-screen">
            {/* overlay */}
            <Dialog.Overlay asChild>
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
            </Dialog.Overlay>
            {/* content */}

            <motion.div
              key={`modal-${new Date().toDateString()}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                opacity: { duration: 0.2 },
                duration: 0.3,
                type: "cubic-bezier(0.16, 1, 0.3, 1)"
              }}
              exit={{ scale: 0.9, opacity: 0, transition: { duration: 0.2 } }}
              className="flex w-full h-full items-center justify-center"
            >
              <div className={`flex w-full h-full items-center justify-center`}>
                <Dialog.Content
                  forceMount={true}
                  onEscapeKeyDown={(event) => event.preventDefault()}
                  onInteractOutside={(event) => event.preventDefault()}
                  className={`${renderSize(
                    size
                  )} relative flex flex-col  overflow-hidden ${
                    size !== "fullwidth" ? "rounded-2xl " : " max-h-screen"
                  } bg-card-bg-color ${
                    fullheight
                      ? "h-[calc(100vh-50px)]"
                      : "max-h-[calc(100vh-50px)]"
                  } shadow-overlap-shadow`}
                  {...props}
                >
                  {closable && (
                    <Dialog.Close asChild>
                      <div className="absolute z-1 ltr:right-4 rtl:left-4 top-4">
                        <CloseButton />
                      </div>
                    </Dialog.Close>
                  )}

                  {title && (
                    <header
                      className={`flex-none ${headerBackground} bg-opacity-80 px-6 py-5 border-b border-border-color border-opacity-40 ${
                        isTitleCentered ? "text-center" : ""
                      }`}
                    >
                      <Dialog.Title
                        className={`text-lg font-medium leading-6 text-primary-text ${
                          isTitleCentered ? "text-center" : ""
                        }`}
                      >
                        {title}
                      </Dialog.Title>

                      {description && (
                        <Dialog.Description
                          className={`text-sm text-secondary-text mt-1`}
                        >
                          {description}
                        </Dialog.Description>
                      )}
                    </header>
                  )}

                  <section
                    className={`flex-auto overflow-auto ${
                      size !== "fullwidth"
                        ? "max-h-[calc(100vh-100px)]"
                        : "h-full"
                    }  min-h-[100px] relative`}
                  >
                    {children}
                  </section>
                </Dialog.Content>
              </div>
            </motion.div>
          </div>
        </Dialog.Portal>
      ) : null}
    </AnimatePresence>
  )
}

const ModalClose = ({ children }: { children: React.ReactNode }) => (
  <Dialog.Close asChild aria-label="close">
    {children}
  </Dialog.Close>
)

Modal.Trigger = ModalTrigger
Modal.Content = ModalContent
Modal.Close = ModalClose
