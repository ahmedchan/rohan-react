import React, { useState } from "react"
import * as RadixPopover from "@radix-ui/react-popover"
import { motion } from "framer-motion"
import { Scrollable } from "../Scrollable/Scrollable"
import CloseButton from "../CloseButton/CloseButton"
import type {
  Side,
  SideOffset,
  Align,
  AlignOffset
} from "../components.type"

type Popover = {
  modal?: boolean
  children: React.ReactNode
  open?: boolean
  onChange?: ((open: boolean) => void) | undefined
  defaultOpen?: boolean
}

type PopoverHeaderProps = {
  title?: string | React.ReactElement | React.ReactNode 
}

type PopoverContent = {
  children: React.ReactNode
  title?: string | React.ReactElement | React.ReactNode
  side?: Side
  sideOffset?: SideOffset
  align?: Align
  alignOffset?: AlignOffset
  width?: string
  collisionPadding?: number
  headerPresent?: boolean
}

export const Popover = ({
  children,
  modal,
  open,
  onChange,
  defaultOpen
}: Popover) => {
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
    <RadixPopover.Root modal={modal} open={isOpen} onOpenChange={onOpenChange}>
      {children}
    </RadixPopover.Root>
  )
}

const PopoverTrigger = ({ children }: { children: React.ReactNode }) => {
  return <RadixPopover.Trigger asChild>{children}</RadixPopover.Trigger>
}

const PopoverHeader = ({ title }: PopoverHeaderProps) => {
  return (
    <header className="flex justify-center text-center items-center py-[4px] px-[8px]">
      <div className="flex-auto  relative z-[3] text-lg font-medium leading-6 text-primary-text  h-[40px] overflow-hidden px-8 whitespace-nowrap text-ellipsis flex items-center justify-center">
        {title}
      </div>
      <RadixPopover.Close asChild aria-label="Close">
        <CloseButton />
      </RadixPopover.Close>
    </header>
  )
}

const PopoverContent = ({
  children,
  title,
  side = "bottom",
  sideOffset = 2,
  align = "center",
  alignOffset = 2,
  collisionPadding = 10,
  headerPresent = false,
  width = "w-56",
  ...props
}: PopoverContent) => {
  return (
    <RadixPopover.Portal>
      <RadixPopover.Content
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        asChild
        collisionPadding={collisionPadding}
        data-header-present={headerPresent}
      >
        <motion.div
          key={new Date().toDateString()}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            opacity: { duration: 0.1 },
            duration: 0.2,
            type: "linear"
          }}
          exit={{ scale: 0.9, opacity: 0, transition: { duration: 0.2 } }}
          className={`popover-wrapper ${width} z-30 overflow-hidden rounded-xl bg-card-bg-color shadow-overlap-shadow ring-1 ring-gray-700 ring-opacity-5 focus:outline-none`}
          {...props}
        >
          {title ? <PopoverHeader title={title} /> : null}

          <Scrollable>
            <div className="popover-content px-5 py-5">{children}</div>
          </Scrollable>
          <RadixPopover.Arrow className="fill-white" />
        </motion.div>
      </RadixPopover.Content>
    </RadixPopover.Portal>
  )
}

Popover.Trigger = PopoverTrigger
Popover.Header = PopoverHeader
Popover.Content = PopoverContent
