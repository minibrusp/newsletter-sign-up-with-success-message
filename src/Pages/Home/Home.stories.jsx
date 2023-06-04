import Home from "./Home"
import { FormContextProvider } from "../../Context/FormContext"

import { userEvent, waitFor, within } from '@storybook/testing-library'
import { expect } from "@storybook/jest"

export default {
  component: Home,
  title: "Pages/Home",
  tags: ["autodocs"],
  
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <FormContextProvider>
        <div className="">
          <Story />
        </div>
      </FormContextProvider>
    )
  ],
}

export const HomePage = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/pqBRoDpWnjWNAZIlhU2ms7/Untitled?type=design&node-id=139-2&t=k0pNZH6ueL4YjbTJ-4",
      allowFullscreen: true,
    }
  }
}

export const Mobile = {
  parameters: {
    viewport: {
      defaultViewport: "FEMMOBILE"
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/pqBRoDpWnjWNAZIlhU2ms7/Untitled?type=design&node-id=90-10&t=KGEueDPhXgILtpAD-4",
      allowFullscreen: true,
    },
  },
  decorators: [
    (Story) => (
      <div className="font-roboto max-w-[375px]">
        <Story />
      </div>
    )
  ],
}
  
export const Desktop = {
  parameters: {
    viewport: {
      defaultViewport: "FEMDESKTOP"
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/pqBRoDpWnjWNAZIlhU2ms7/Untitled?type=design&node-id=90-8&t=KGEueDPhXgILtpAD-4",
      allowFullscreen: true,
    },
  },
}


export const TestEmailFormExist = {
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

export const TestEmptySubmit = {
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)

    const textInput = canvas.getByPlaceholderText(/email@company.com/i)
    const submitBtn = canvas.getByRole('button', { name: /subscribe/i })

    await userEvent.click(submitBtn)

    await expect(canvas.getByText(/empty field/i)).toBeInTheDocument()
    await expect(textInput).toHaveStyle("border-color: hsl(4 100% 67% / 50 )")

  }
}

export const TestInvalidSubmit = {
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)

    const textInput = canvas.getByPlaceholderText(/email@company.com/i)
    const submitBtn = canvas.getByRole('button', { name: /subscribe/i })

    await userEvent.type(textInput, "email@company")
    await userEvent.click(submitBtn)

    await expect(canvas.getByText(/valid email required/i)).toBeInTheDocument()
    await expect(textInput).toHaveStyle("border-color: hsl(4 100% 67% / 50 )")

  }
}

export const TestEmailAlreadyASubscriberSubmit = {
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)

    const textInput = canvas.getByPlaceholderText(/email@company.com/i)
    const submitBtn = canvas.getByRole('button', { name: /subscribe/i })

    await userEvent.type(textInput, "tecekof802@ratedane.com")
    await userEvent.click(submitBtn)

    // await expect(canvas.findByText(/tecekof802@ratedane.com already subscribed/)).toBeInTheDocument()

    await waitFor(() => {
      expect(canvas.getByText(/tecekof802@ratedane.com already subscribed/)).toBeInTheDocument()
      expect(canvas.getByText(/tecekof802@ratedane.com/i)).toBeInTheDocument()
      expect(canvas.getByText(/tecekof802@ratedane.com/i)).toHaveStyle("color: hsl(4 100% 67% / 50 )")
      
    })
  }
}

export const TestSuccessfullSubmit = {
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)

    const textInput = canvas.getByPlaceholderText(/email@company.com/i)
    const submitBtn = canvas.getByRole('button', { name: /subscribe/i })

    await userEvent.type(textInput, "email@company.com")
    await userEvent.click(submitBtn)

    await expect(canvas.getByAltText(/check icon/i)).toBeInTheDocument()
    await expect(canvas.getByText(/thanks for subscribing/i)).toBeInTheDocument()
    await expect(canvas.getByText(/email@company.com/i)).toBeInTheDocument()
    await expect(canvas.getByRole('button', {name: /dismiss/i,})).toBeInTheDocument()

  }
}