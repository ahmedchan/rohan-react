import React, { useState } from "react"
import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu"
import { motion } from "framer-motion"
import { Scrollable } from "../Scrollable/Scrollable"
import CloseButton from "../CloseButton/CloseButton"
import type {
  Side,
  SideOffset,
  Align,
  AlignOffset
} from "../components.type"

type DropdownProps = {
  children: React.ReactNode
  overlay?: boolean
  modal?: boolean
  dir?: "ltr" | "rtl"
  open?: boolean
  onChange?: ((open: boolean) => void) | undefined
  defaultOpen?: boolean
}

type TriggerProps = {
  children: React.ReactNode
  disabled?: boolean
  active?: boolean
}

type DropdownMenuProps = {
  width?: string
  children: React.ReactNode
  side?: Side
  sideOffset?: SideOffset
  align?: Align
  alignOffset?: AlignOffset
  title?: string
  onDismissClicked?: () => void
  closeable?: boolean 
  collisionPadding?: number
  headerPresent?: boolean
}

type DropdownHeaderProps = {
  title?: string
  onDismissClicked?: () => void
  closeable?: boolean
}

type GroupProps = {
  title?: string
  subtitle?: string
  children: React.ReactNode
}

type ItemProps = {
  text?: string
  icon?: React.ReactNode
  descraption?: string
  children?: React.ReactNode
  disabled?: boolean
  onSelect?: (event: Event) => void
  active?: boolean
}

export interface MenuItemButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode
  text?: string | React.ReactNode
  descraption?: string | React.ReactNode
  children?: React.ReactNode
}

export const Dropdown = ({
  children,
  modal,
  dir,
  open,
  onChange,
  defaultOpen
}: DropdownProps) => {
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
    <RadixDropdownMenu.Root
      dir={dir}
      modal={modal}
      open={isOpen}
      onOpenChange={onOpenChange}
    >
      {children}
    </RadixDropdownMenu.Root>
  )
}

export const DropdownTrigger = ({
  children,
  disabled = false,
  ...props
}: TriggerProps) => {
  return (
    <RadixDropdownMenu.Trigger asChild disabled={disabled} {...props}>
      {children}
    </RadixDropdownMenu.Trigger>
  )
}

const DropdownHeader = ({ title, onDismissClicked, closeable }: DropdownHeaderProps) => {
  return (
    <header className="flex justify-center text-center items-center py-[4px] px-[8px]">
      {title ? (
        <p className="flex-auto text-opacity-80 relative z-[3] font-medium h-[40px] overflow-hidden px-8 whitespace-nowrap text-ellipsis flex items-center justify-center">
          {title}
        </p>
      ) : null}
      {closeable ? <CloseButton onClick={onDismissClicked} />:null}
    </header>
  )
}

export const DropdownMenu = ({
  side = "bottom",
  sideOffset = 2,
  align = "start",
  alignOffset = 2,
  title,
  onDismissClicked,
  width,
  children,
  closeable = true, 
  collisionPadding = 10,
  headerPresent = false,
  ...props
}: DropdownMenuProps) => {
  
  return (
    <RadixDropdownMenu.Portal>
      <RadixDropdownMenu.Content
        asChild
        loop={true}
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        collisionPadding={collisionPadding}
        data-header-present={headerPresent}
      >
        <motion.div
          className={`min-w-full dropdown-menu-wrapper max-w-[370px] will-change-auto z-30 overflow-auto rounded-lg bg-card-bg-color shadow-overlap-shadow ring-1 ring-gray-700 ring-opacity-5 focus:outline-none`}
          style={{ minWidth: `var(--radix-dropdown-menu-trigger-width)` }}
          key={new Date().toDateString()}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            opacity: { duration: 0.3 },
            duration: 0.4,
            type: "spring"
          }}
          exit={{ opacity: 0, scale: 0.95 }}
          {...props}
        >
          {title ? (
            <DropdownHeader
              closeable={closeable}
              title={title}
              onDismissClicked={onDismissClicked}
            />
          ) : null}

          <Scrollable>
            <div className="dropdown-menu-content">{children}</div>
          </Scrollable>
        </motion.div>
      </RadixDropdownMenu.Content>
    </RadixDropdownMenu.Portal>
  )
}

export const DropdownMenuGroup = ({
  children,
  title,
  subtitle
}: GroupProps) => {
  return (
    <RadixDropdownMenu.Group asChild>
      <div className={`${title ? "pt-5 pb-1" : "py-1"}`}>
        {title && (
          <div className="mb-1 px-4">
            <p className="text-opacity-80 relative z-[3] font-medium overflow-hidden whitespace-nowrap text-ellipsis ">
              {title}
            </p>
            <span className="text-secondary-text text-xs">{subtitle}</span>
          </div>
        )}

        {children}
      </div>
    </RadixDropdownMenu.Group>
  )
}

export const DropdownMenuItem = (
  { text, icon, descraption, active, disabled = false, onSelect, children }:
  ItemProps
) => {
  return (
    <RadixDropdownMenu.Item disabled={disabled} onSelect={onSelect} asChild>
      <div
        className={`group w-full relative text-primary-text cursor-pointer data-[highlighted]:bg-primary-gray data-[disabled]:cursor-not-allowed data-[disabled]:text-secondary-text flex flex-col w-full px-4 py-3  outline-0
         ${active ? "bg-primary-gray" : ""}  
      `}
      >
        <span
          className="flex w-full items-center gap-2"
          style={{ direction: "inherit" }}
        >
          {icon && (
            <span className={`item-icon data-[highlighted]:bg-primary-gray`}>
              {icon}
            </span>
          )}

          <span>{text}</span>
        </span>

        {descraption && (
          <span
            className={`text-xs ${
              active ? "text-white text-opacity-70" : "text-secondary-text"
            }`}
          >
            {descraption}
          </span>
        )}

        {children && <span className="block">{children}</span>}
      </div>
    </RadixDropdownMenu.Item>
  )
}

const DropdownMenuItemButton: React.ForwardRefRenderFunction<
  HTMLButtonElement, MenuItemButtonProps
> = ({ icon, text, descraption, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={`w-full cursor-pointer hover:bg-primary-gray relative text-primary-text cursor-pointer data-[highlighted]:bg-primary-gray data-[disabled]:cursor-not-allowed data-[disabled]:text-secondary-text flex flex-col w-full px-4 py-3  outline-0`}
      {...props}
    >
      <span
        className="flex w-full items-center gap-2"
        style={{ direction: "inherit" }}
      >
        {icon && (
          <span className={`item-icon data-[highlighted]:bg-primary-gray`}>
            {icon}
          </span>
        )}

        <span>{text}</span>
      </span>

      {descraption && (
        <span className={`text-xstext-secondary-text`}>{descraption}</span>
      )}

      {children && <span className="block">{children}</span>}
    </button>
  )
}


const DropdownDivider = () => (
  <RadixDropdownMenu.Separator className="my-1 block w-full bg-secondary-gray h-[1px]" />
)

// alises
Dropdown.Trigger = DropdownTrigger
Dropdown.Menu = DropdownMenu
Dropdown.Header = DropdownHeader
Dropdown.Group = DropdownMenuGroup
Dropdown.Item = DropdownMenuItem
Dropdown.Button = React.forwardRef(DropdownMenuItemButton)
Dropdown.Divier = DropdownDivider