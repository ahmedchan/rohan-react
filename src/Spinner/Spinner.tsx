import React from "react"
import type { Size } from "../components.type"

type Props = {
  size?: Size
  position?: "static" | "absolute" | "blockScreen"
  align?: "left" | "right" | "center"
  variant?: "default" | "primary" | "secondary" | "white" | "danger" | "info"
  text?: string
  blockScreen?: boolean
}

const renderColor = (color: string) => {
  switch (color) {
    case "primary":
      return " border-primary "
    case "secondary":
      return " border-secondary "
    case "white":
      return " border-white "
    case "success":
      return " border-green-600 "
    case "info":
      return " border-blue-600 "
    case "danger":
      return " border-red-600 "

    default:
      return " border-gray-400 dark:border-gray-500 "
  }
}

const renderAlign = (align: string) => {
  switch (align) {
    case "left":
      return "justify-start"
    case "right":
      return "justify-end"
    default:
      return "justify-center"
  }
}

const renderSize = (size: Size) => {
  switch (size) {
    case "sm":
      return "h-4 w-4"
    case "lg":
      return "h-24 w-24"
    case "xl":
      return "h-32 w-32"
    default:
      return "h-8 w-8"
  }
}

const renderPosition = (position: string) => {
  switch (position) {
    case "absolute":
      return "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    case "blockScreen":
      return "fixed inset-0 flex items-center justify-center "
    default:
      return "static"
  }
}

export const Spinner = ({
  size = "md",
  align = "center",
  position = "static",
  variant = "default"
}: Props) => {
  return (
    <div className={`${renderPosition(position)} dark:bg-[#3b3b40]`}>
      <div className={`${renderAlign(align)} flex items-center`}>
        <div
          className={`${renderSize(
            size
          )} animate-spin rounded-full border-b-2 ${renderColor(variant)}`}
        />
      </div>
    </div>
  )
}
