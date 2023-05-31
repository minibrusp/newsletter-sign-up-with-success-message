import Input from "./Input"

export default {
  component: Input,
  title: "Components/Atoms/Input",
  tags: ["autodocs"],
  args: {
    type: "text",
    placeholder: "placeholder",
    id: null
  },
  argTypes: {
    type: {
      table: {
        disable: true
      }
    }
  },
  decorators: [
    (Story) => (
      <div className="font-roboto">
        <Story />
      </div>
    )
  ]
}

export const inputEmail = {
  args: {
    placeholder: "email@company.com",
    id: "email",
    inputEmail: "",
    error: false
  },
}

export const inputEmailError = {
  args: {
    placeholder: "email@company.com",
    id: "email",
    inputEmail: "",
    error: true
  },
}