import Form from "./Form"

import { userEvent, within } from '@storybook/testing-library';
import { expect } from "@storybook/jest"

import { useAddonState } from '@storybook/manager-api';


export default {
  component: Form,
  title: "Components/Organisms/Form",
  tags: ["autodocs"],
  parameters: {
    error: true,
    errorMsg: "Hello"
  }
}

export const EmailForm = {
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)

    const label = canvas.getByText(/email address/i)
    const textInput = canvas.getByPlaceholderText(/email@company.com/i)
    const submitBtn = canvas.getByRole('button', { name: /subscribe/i })

    await expect(submitBtn).toBeInTheDocument()
    await expect(label).toBeInTheDocument()
    await expect(textInput).toBeInTheDocument()
  }
}

export const EmptySubmit = {
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)

    // const label = canvas.getByText(/email address/i)
    const textInput = canvas.getByPlaceholderText(/email@company.com/i)
    const submitBtn = canvas.getByRole('button', { name: /subscribe/i })

    await userEvent.click(submitBtn)

    await expect(canvas.getByText(/Email field should not be empty/i)).toBeInTheDocument()
    await expect(textInput).toHaveStyle("border-color: hsl(4 100% 67% / 50 )")

  }
}

export const InvalidSubmit = {
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)

    // const label = canvas.getByText(/email address/i)
    const textInput = canvas.getByPlaceholderText(/email@company.com/i)
    const submitBtn = canvas.getByRole('button', { name: /subscribe/i })

    await userEvent.type(textInput, "email@company")

    await userEvent.click(submitBtn)

    await expect(canvas.getByText(/please enter a valid email/i)).toBeInTheDocument()
    await expect(textInput).toHaveStyle("border-color: hsl(4 100% 67% / 50 )")

  }
}