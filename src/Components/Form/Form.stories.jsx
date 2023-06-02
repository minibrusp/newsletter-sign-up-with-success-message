import Form from "./Form"

import { userEvent, within } from '@storybook/testing-library'
import { expect } from "@storybook/jest"

import { FormContextProvider } from "../../Context/FormContext"


export default {
  component: Form,
  title: "Components/Molecules/Form",
  tags: ["autodocs"],
  parameters: {
    error: true,
    errorMsg: "Hello"
  },
  decorators: [
    (Story) => (
      <FormContextProvider>
        <div className="font-roboto max-w-[375px] md:max-w-[376px]">
          <Story />
        </div>
      </FormContextProvider>
    )
  ]
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

    await expect(canvas.getByText(/empty field/i)).toBeInTheDocument()
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

    await expect(canvas.getByText(/valid email required/i)).toBeInTheDocument()
    await expect(textInput).toHaveStyle("border-color: hsl(4 100% 67% / 50 )")

  }
}