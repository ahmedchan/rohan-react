import React from "react"
import * as RadixHoverCard from "@radix-ui/react-hover-card"
import type {
  Side,
  SideOffset,
  Align,
  AlignOffset
} from "../components.type"

type HoverCardProps = {
  children: React.ReactNode
  delay?: number
}
type HoverCardTriggerProps = {
  children: React.ReactNode
}
type HoverCardContentProps = {
  children: React.ReactNode
  side?: Side
  sideOffset?: SideOffset
  align?: Align
  alignOffset?: AlignOffset
  width?: string
  collisionPadding?: number
  headerPresent?: boolean
}

export const HoverCard = ({ children, delay = 200 }: HoverCardProps) => {
  return (
    <RadixHoverCard.Root openDelay={delay}>
      {children}
    </RadixHoverCard.Root>
  )
}

const HoverCardTrigger = ({ children }: HoverCardTriggerProps) => {
   return (
     <RadixHoverCard.Trigger asChild>
       {children}
     </RadixHoverCard.Trigger>
   )
}

const HoverCardContent = ({
  children,
  side = "top",
  sideOffset = 2,
  align = "start",
  alignOffset = 2,
  width = 'w-[300px]',
  collisionPadding = 10,
  ...props
}: HoverCardContentProps) => {
  return (
    <RadixHoverCard.Portal>
      <RadixHoverCard.Content
        side={side}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        collisionPadding={collisionPadding}
        asChild
      >
        <div
          className={` card-hover-wrapper overflow-hidden text-sm ${width} z-30  rounded-lg bg-white shadow-overlap-shadow ring-1 ring-gray-700 ring-opacity-5 focus:outline-none`}
          {...props}
        >
          {children}

          <RadixHoverCard.Arrow className="fill-white" />
        </div>
      </RadixHoverCard.Content>
    </RadixHoverCard.Portal>
  )
}

HoverCard.Trigger = HoverCardTrigger
HoverCard.Content = HoverCardContent
