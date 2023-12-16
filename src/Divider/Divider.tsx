import React from "react"
import * as Separator from "@radix-ui/react-separator"
import type { Orientation } from "../components.type"

type DivideProps = {
  orientation?: Orientation
  height?: string | undefined
}

export const Divider = ({
  height,
  orientation = "horizontal"
}: DivideProps) => {
  const verticalHeight =
    orientation === "vertical"
      ? height
        ? height
        : "data-[orientation=vertical]:h-full"
      : "data-[orientation=vertical]:h-full"

  return (
    <Separator.Root
      decorative={true}
      orientation={orientation}
      className={`bg-border-color data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full ${verticalHeight} data-[orientation=vertical]:w-px`}
    />
  )
}
