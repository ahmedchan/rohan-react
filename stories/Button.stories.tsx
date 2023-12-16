import React from "react"
import { Meta, StoryObj } from '@storybook/react';
// button
import Button from "../src/Button/Button"

const meta: Meta = {
   title: "Button",
   component: Button,
   argTypes: {
      onClick: {action: "clicked"}
   }
}

export default meta

const Template: StoryObj<props> = (args) => <Button {...args} />; 
export const Default = Template.bind({})
Default.args = {
   disabled: true
}
