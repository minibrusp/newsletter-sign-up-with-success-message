import EmailFormField from "./EmailFormField"

export default {
  component: EmailFormField,
  title: "Components/Molecules/EmailFormField",
  tags: ["autodocs"],
  args: {
    type: "email",
    id: "email",
    placeholder: "email@company.com",
    labelFor: "email",
    text: "Email address",
    error: false,
    errorMsg: "valid email required"
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
      <div className="font-roboto max-w-[375px] md:max-w-[376px]">
        <Story />
      </div>
    )
  ]
}

export const EmailField = {}

export const EmailFieldEmptySubmit = {
  args: {
    error: true,
    errorMsg: "empty field"
  }
}

export const EmailFieldInvalidSubmit = {
  args: {
    error: true,
    errorMsg: "valid email required",
    inputEmail: "email@company"
  }
}