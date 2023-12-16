import React from "react"
import classnames from "classnames"
import { Spinner } from "../Spinner/Spinner"
import type { Size } from "../components.type" 

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  disabled?: boolean
  active?: boolean
  rounded?: boolean
  variant?: "default" | "primary" | "secondary" | "black"
  modifier?: "outline" | "gosht" | "light" | undefined
  size?: Size
  fullwidth?: boolean
  loading?: boolean
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
    return "bg-transparent border-0 dark:bg-primary-gray dark:border-secondary-gray dark:text-muted-text tex-muted-text cursor-not-allowed hover:enabled:shadow-none text-secondary-text"

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
        return "bg-transparent border-transparent uppercase text-primary-text disabled:border-0 disabled:text-secondary-text"
      } else if (modifier === "outline") {
        return "bg-transparent  border-secondary-text text-primary-text"
      } else if (modifier === "light") {
        return "bg-secondary-gray/40 border-transparent text-primary-color text-primary-text"
      } else {
        return "bg-secondary-gray hover:bg-secondary-gray/80 border-secondary-gray text-primary-text"
      }
  }
}

// const renderSize = (size: string): string => {
//   switch (size) {
//     case "xs":
//       return `text-[.8rem] h-[30px]`
//     case "sm":
//       return `text-sm h-[32px] `
//     case "lg":
//       return `text-base h-[44px] `
//     case "xl":
//       return `text-lg h-[58px] `
//     default:
//       return `text-base h-[38px] `
//   }
// }

const Button: React.ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  {
    children,
    variant = "default",
    modifier = "",
    disabled = false,
    active = false,
    size = "md",
    fullwidth = false,
    loading = false,
    rounded = false,
    className = "",
    ...props
  },
  ref
) => {

  const sizes = {
    xs: "text-[.8rem] h-[30px]",
    sm: "text-sm h-[32px]",
    md: "text-base h-[38px]",
    lg: "text-base h-[44px]",
    xl: "text-lg h-[58px]"
  }

  // const variants = {
  //   primary: {
  //     default: `bg-primary text-white border-0 hover:bg-primary/80`,
  //     outline: `${
  //         active
  //           ? "bg-primary/10 text-primary"
  //           : "bg-transparent border-primary text-primary"
  //       } hover:bg-primary/5`,
  //     gosht: `bg-transparent border-0 text-primary`,
  //     light: `bg-primary/10 border-transparent text-primary shadow-none`
  //   },
  //   secondary: {
  //     default: `bg-secondary border-transparent text-white hover:bg-secondary/90`,
  //     outline: ``,
  //     gosht: ``,
  //     light: ``
  //   },
  //   black: {
  //     default: ``,
  //     outline: ``,
  //     gosht: ``,
  //     light: ``
  //   }
  // }

  return (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={`
        relative group uppercase whitespace-nowrap text-center px-3 outline-none transition-all duration-100 active:enabled:scale-95 ${
          fullwidth ? "flex w-full" : "inline-flex"
        } gap-2 items-center justify-center hover:enabled:shadow border focus:ring-4 focus:ring-gray-200 focus:ring-opacity-30 
        ${renderVariant({ variant, disabled, modifier, active })}
        ${sizes[size]}
        ${rounded ? "rounded-full" : "rounded-md"}
        ${loading ? "bg-opacity-60 cursor-not-allowed" : ""}
        ${className}
      `}
      {...props}
    >
      <span
        className={classnames(
          "inline-flex items-center gap-2 ",
          loading && "opacity-5"
        )}
      >
        {children}
      </span>

      {loading && <Spinner position="absolute" size="sm" />}
    </button>
  )
}

export const ButtonRef = React.forwardRef(Button)
