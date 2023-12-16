import React from "react"
import { Spinner } from "../Spinner/Spinner"
import type { Size, Position } from "../components.type"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  disabled?: boolean
  active?: boolean
  variant?: "default" | "primary" | "secondary"
  modifier?: "outline" | "gosht" | "light" | undefined
  size?: Size
  loading?: boolean
  position?: Position
}

type renderVaiantProps = {
  variant: string
  disabled: boolean
  modifier: string | undefined
  active: boolean
  
}

const renderVariant = ({
  variant,
  disabled,
  modifier,
  active
}: renderVaiantProps): string => {
  if (disabled)
    return "bg-gray-100 tex-muted-text cursor-not-allowed hover:shadow-none text-secondary-text"

  switch (variant) {
    case "primary":
      if (modifier === "gosht") {
        return "bg-transparent border-0 text-primary "
      } else if (modifier === "outline") {
        return `${
          active
            ? "bg-primary/10 text-primary"
            : "bg-transparent border-primary text-primary"
        } hover:bg-primary/5`
      } else if (modifier === "light") {
        return "bg-primary/10 border-transparent text-primary shadow-none"
      } else {
        return "bg-primary text-white border-0 hover:bg-primary/80"
      }

    case "secondary":
      if (modifier === "gosht") {
        return "bg-transparent border-0 text-secondary"
      } else if (modifier === "outline") {
        return "bg-transparent border-secondary text-secondary "
      } else if (modifier === "light") {
        return "bg-secondary/10 border-transparent text-secondary"
      } else {
        return "bg-secondary border-transparent text-white hover:bg-secondary/90"
      }

    case "black":
      if (modifier === "gosht") {
        return "bg-transparent border-0 text-black"
      } else if (modifier === "outline") {
        return `${
          active ? "bg-primary text-white" : "bg-transparent text-black"
        }`
      } else if (modifier === "light") {
        return "bg-black/10 border-transparent text-black"
      } else {
        return "bg-black border-transparent text-white hover:bg-black/80"
      }

    default:
      if (modifier === "gosht") {
        return "bg-transparent border-transparent uppercase text-primary-text"
      } else if (modifier === "outline") {
        return "bg-transparent  border-secondary-text text-primary-text"
      } else if (modifier === "light") {
        return "bg-secondary-gray/40 border-transparent text-primary-color text-primary-text"
      } else {
        return "bg-secondary-gray hover:bg-secondary-gray/80 border-secondary-gray text-primary-text"
      }
  }
}

const renderSize = (size: string): string => {
  switch (size) {
    case "xs":
      return `text-[.8rem] w-[30px] h-[30px]`
    case "sm":
      return `text-sm h-[32px] w-[32px]`
    case "lg":
      return `text-base h-[44px] w-[44px]`
    case "xl":
      return `text-lg h-[50px] w-[50]`
    default:
      return `text-base h-[38px] w-[38px]`
  }
}

const IconButton: React.ForwardRefRenderFunction<HTMLButtonElement, Props> = (
  {
    children,
    variant = "default",
    modifier,
    disabled = false,
    active = false,
    size = "md",
    loading = false,
    position = "relative",
    className = "",
    ...props
  },
  ref
) => {
  return (
    <button
      ref={ref}
      className={`
        ${position} rounded-full overflow-hidden  hover:shadow border active:scale-95 transition-all duration-100 focus:ring-4 focus:ring-gray-200 focus:ring-opacity-30  
        ${renderVariant({ variant, disabled, modifier, active })}
        
        ${loading ? "bg-opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
      disabled={loading || disabled}
      {...props}
    >
      <span
        className={`${renderSize(
          size
        )} text-center items-center justify-center inline-flex ${
          loading && "opacity-5"
        }`}
      >
        {children}
      </span>
      {loading && <Spinner position="absolute" size="sm" />}
    </button>
  )
}

export const IconButtonRef = React.forwardRef(IconButton)

// export default React.forwardRef(IconButton)
