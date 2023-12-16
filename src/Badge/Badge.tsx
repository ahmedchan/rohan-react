import React from 'react'

type BadgeProps = {
   children: React.ReactNode 
   variant?: "primary" | "default" | "secondary" | "success" | "error" | "warning" | "info"
}

const renderVariant = (variant:string): string => {
   switch (variant) {
     case "primary":
       return "bg-primary/20 text-primary"
     case "success":
       return "bg-success/20 text-success"
     case "error":
       return "bg-error/20 text-error"
      default: return "bg-primary-gray text-primary-text"
   }
}

const Badge: React.ForwardRefRenderFunction<HTMLSpanElement, BadgeProps> = (
  { children, variant = "default" },
  ref
) => {
  return (
    <span
      ref={ref}
      className={`inline-flex items-center rounded-full ${renderVariant(variant)} px-2 py-1 text-xs font-normal ring-1 ring-inset ring-gray-500/10`}
    >
      {children}
    </span>
  )
}

export default React.forwardRef(Badge)
