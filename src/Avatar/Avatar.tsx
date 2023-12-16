import React, { useState } from "react"
import * as RadixAvatar from "@radix-ui/react-avatar"
import { Spinner } from "../Spinner/Spinner"

type ImageLoadingStatus = "idle" | "loading" | "loaded" | "error"

type Variant = "circle" | "square"

type AvatarProps = {
  name?: string
  src?: string
  alt?: string
  fallbackDelay?: number
  onLoadingStatusChange?: (status: ImageLoadingStatus) => void
  width?: number
  height?: number
  variant?: Variant
  className?: string
  background?: string
  color?: string
}

type AvatarGroupProps = {
  max: number
  children: React.ReactNode[]
  onRestClicked?: (count: number) => void
  restClassName?: string

  width?: number
  height?: number
  variant?: Variant
  className?: string
  background?: string
  color?: string
} 

const Avatar: React.ForwardRefRenderFunction<HTMLDivElement, AvatarProps> = (
  {
    name,
    src,
    alt,
    fallbackDelay = 600,
    variant = "circle",
    background = "bg-primary-gray",
    color = "text-primary-text",
    width = 42,
    height = 42,
    className = "",
    ...props
  },
  ref
) => {
  const [isImageLoading, setIsImageLoading] = useState("idle")
  const handleLoadedChange = (loadingStatus: ImageLoadingStatus) => {
    setIsImageLoading(loadingStatus)
  }

  const modifiedName = name ? name.split(" ").slice(0,2).map(word => word.charAt(0)).join('').toUpperCase() : "AV"

  return (
    <RadixAvatar.Root
      style={{ width: width + "px", height: height + "px" }}
      className={`relative ${background} ${color} inline-flex select-none items-center justify-center overflow-hidden ${
        variant === "circle" ? "rounded-full" : "rounded-md"
      } align-middle ${className}`}
      ref={ref}
      {...props}
    >
      <RadixAvatar.Image
        onLoadingStatusChange={handleLoadedChange}
        className="h-full w-full rounded-full object-cover m-auto text-center"
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={"lazy"}
      />
      {isImageLoading === "loading" && <Spinner size="xs" variant="primary" />}
      {isImageLoading === "error" && (
        <RadixAvatar.Fallback
          className="leading-1 bg-inhiert text-sm flex h-full w-full items-center justify-center font-medium"
          delayMs={fallbackDelay}
        >
          {modifiedName}
        </RadixAvatar.Fallback>
      )}
    </RadixAvatar.Root>
  )
}

export const AvatarGroup = ( props : AvatarGroupProps) => {
   const { children, max, onRestClicked, restClassName, width=42, height= 42, variant="circle"} = props
   const newChidlren = [...children].splice(0, max)
   const restItemCount = children.length > max ? children.length - max : 0

  return (
    <div className="inline-flex  items-center w-auto">
      <div
        className={`flex items-center justify-center rtl:space-x-reverse -space-x-3`}
      >
        {React.Children.map(newChidlren, (child) => {
          return (
            <div
              className={`relative border border-black border-opacity-20 inline-block ${
                variant === "circle" ? "rounded-full" : "rounded-md"
              } shadow-md`}
            >
              {child}
            </div>
          )
        })}
      </div>

      {restItemCount ? (
        <button
          type="button"
          style={{
            width: `${width}px`,
            height: `${height}px`
          }}
          className={`flex ${
            onRestClicked ? "cursor-pointer hover:underline" : "cursor-default"
          } bg-bluish-gray text-mutedColor ${
            variant === "circle" ? " rounded-full " : "rounded-md"
          } items-center justify-center ${restClassName}`}
          onClick={() => {
            if (onRestClicked) {
              onRestClicked!(restItemCount)
            }
          }}
          {...props}
        >
          <span>+{restItemCount}</span>
        </button>
      ) : null}
    </div>
  )
}

export default React.forwardRef(Avatar)
