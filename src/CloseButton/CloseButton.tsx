import React from 'react'
import IconButton from '../IconButton/IconButton'

type Props = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const CloseButton: React.ForwardRefRenderFunction<HTMLButtonElement, Props> = ({
  onClick,
  ...props
}, ref) => {
  return (
    <IconButton
      ref={ref}
      type="button"
      variant="default"
      area-labelly="dismiss"
      size="xs"
      onClick={onClick}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4 opacity-60 hover:opacity-90"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </IconButton>
  )
}

export default React.forwardRef(CloseButton)
