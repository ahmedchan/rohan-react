import React from "react"
import type {Position} from "../components.type"

type props = {
  height?: number
  position?: Position
  variant?: "primary" | "default" | "secondary"
}

export const LoadingLine = ({
  height = 2,
  position = "fixed",
  variant = "primary"
}: props) => {
  return (
    <div className={`${position} load-bar top-0 right-0 z-[99999] w-full `}>
      <div
        style={{ height: `${height}px` }}
        className={`animate-loadingbar absolute inline h-full w-0 bg-${variant} rounded-full overflow-hidden`}
      />
    </div>
  )
}
