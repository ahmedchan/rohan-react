import React from "react" 

interface Props {
  variant?: "black" | "white"
  style?: React.CSSProperties
}

const Backdrop: React.ForwardRefRenderFunction<HTMLDivElement, Props> = ({
  variant = "white",
  style
}, ref) => {
  return (
    <div
      ref={ref}
      role="backdrop"
      className={`fixed  inset-0 block`}
      style={{
        backgroundColor:
          variant === "white"
            ? "var(--backdrop-light-color)"
            : "var(--backdrop-dark-color)",
        ...style
      }}
    />
  )
}

export default React.forwardRef(Backdrop)
