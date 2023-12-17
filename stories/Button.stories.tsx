import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import Button, { ButtonProps } from "../src/Button/Button"

const meta: Meta<typeof Button> = {
   title: "Button",
   component: Button,
   argTypes: {
      children: {
         control: {
            type: "Button"
         }
      }
   },
   parameters: {
      controls: { expanded: true }
   }
}
export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
   args: {
      children: "Welcome",
      variant: "primary",
      modifier: "outline",
      rounded: true
   }
}
