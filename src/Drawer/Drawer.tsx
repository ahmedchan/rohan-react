import React, { ReactElement, useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { motion, AnimatePresence } from "framer-motion"
import Backdrop from "../Backdrop/Backdrop"
import CloseButton from "../CloseButton/CloseButton"
import type { Size,Side } from "../components.type"


type DrawerProps = {
  children: React.ReactNode
  modal?: boolean
  open?: boolean
  onChange?: ((open: boolean) => void) | undefined
  defaultOpen?: boolean
}

type TriggerProps = {
  children: React.ReactNode
}

type ContentProps = {
  children: React.ReactNode
  size?: Size | "fullwidth"
  closable?: boolean
  title?: string | ReactElement
  isTitleCentered?: boolean
  description?: string
  side?: Side
  open: boolean 
}

const renderDirection = (dir: string): string => {
  switch (dir) {
    case "left":
      return "left-0 pr-10 inset-y-0 max-w-full h-screen pr-7 md:pr-20"
    case "top":
      return "top-0 pb-10 inset-x-0 max-h-full"
    case "bottom":
      return "bottom-0 pt-10 inset-x-0 max-h-full"
    // right is default
    default:
      return "right-0 inset-y-0 max-w-full h-screen pl-7 md:pl-20 "
  }
}

const renderSize = (size: string, dir: string): string => {
  switch (size) {
    case "xs":
      return dir === "top" || dir === "bottom"
        ? "md:h-80  w-full"
        : "w-screen md:w-80"
    case "sm":
      return dir === "top" || dir === "bottom"
        ? "md:h-96  w-full"
        : "w-screen md:w-96"
    case "lg":
      return dir === "top" || dir === "bottom"
        ? "md:h-auto  w-full"
        : "w-screen md:w-[940px]"
    case "xl":
      return dir === "top" || dir === "bottom"
        ? "md:h-auto w-full"
        : "w-screen md:w-[1220px]"
    case "fullwidth":
      return dir === "top" || dir === "bottom"
        ? "h-screen w-full"
        : "w-screen"
    // md
    default:
      return dir === "top" || dir === "bottom"
        ? " w-full md:h-auto"
        : "w-screen md:w-[640px]"
  }
}

const from = (dir: Side) => {
  switch (dir) {
    case "right":
      return { opacity: 0, x: "100%" }
    case "left":
      return { opacity: 0, x: "-100%" }
    case "top":
      return { opacity: 0, y: "-100%" }
    default:
      return { opacity: 0, y: "100%" }
  }
}

const to = (dir: Side) => {
  switch (dir) {
    case "right":
      return { opacity: 1, x: 0 }
    case "left":
      return { opacity: 1, x: 0 }
    case "top":
      return { opacity: 1, y: 0 }
    default:
      return { opacity: 1, y: 0 }
  }
}

// main compoent
export const Drawer = ({
  children,
  modal = false,
  open,
  onChange,
  defaultOpen
}: DrawerProps) => {
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

const DrawerTrigger = ({ children }: TriggerProps) => {
  return <Dialog.Trigger asChild>{children}</Dialog.Trigger>
}

const ModalContent = ({
  children,
  size = "md",
  closable = true,
  title,
  isTitleCentered = true,
  description,
  side = "right",
  open,
  ...props
}: ContentProps) => {
  
  return (
    <AnimatePresence>
      {open ? (
        <Dialog.Portal forceMount>
          <div className="fixed inset-0 overflow-y-auto z-30 h-screen">
            {/* overlay */}
            {/* <Dialog.Overlay asChild></Dialog.Overlay> */}
            <motion.div
              key={`modal-${new Date().toDateString()}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                opacity: { duration: 0.2 },
                duration: 0.4,
                type: "ease-in-out"
              }}
              exit={{ opacity: 0 }}
            >
              <Backdrop />
            </motion.div>
            {/* content */}
            <motion.div
              key={new Date().toDateString()}
              initial={from(side)}
              animate={to(side)}
              transition={{
                opacity: { duration: 0.3 },
                duration: 0.2,
                type: "ease-in-out"
              }}
              exit={from(side)}
              className={`fixed  ${renderDirection(
                side
              )} flex  items-center justify-center`}
            >
              <Dialog.Content
                onEscapeKeyDown={(event) => event.preventDefault()}
                onInteractOutside={(event) => event.preventDefault()}
                className={`relative  ${renderSize(
                  size,
                  side
                )} bg-card-bg-color  flex flex-col h-screen shadow-[0_0_5px_1px_rgba(0,0,0,.15)] pointer-events-auto`}
                {...props}
              >
                {closable && (
                  <Dialog.Close asChild>
                    <div className="absolute z-[99] ltr:right-4 rtl:left-4 top-4">
                      <CloseButton />
                    </div>
                  </Dialog.Close>
                )}

                {title && (
                  <header
                    className={`flex-none bg-opacity-80 px-6 py-5 border-b border-border-color border-opacity-40 ${
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

                <article className="flex-auto min-h-[100px] h-full overflow-auto flex flex-col">
                  {children}
                </article>
              </Dialog.Content>
            </motion.div>
          </div>
        </Dialog.Portal>
      ) : null}
    </AnimatePresence>
  )
}

const DrawerClose = ({ children }: { children: React.ReactNode }) => (
  <Dialog.Close asChild>{children}</Dialog.Close>
)


Drawer.Trigger = DrawerTrigger
Drawer.Content = ModalContent
Drawer.Close = DrawerClose

export default Drawer
