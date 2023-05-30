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
    errorMsg: "Please enter a valid email !!!"
  }
}

export const EmailField = {}

export const EmailFieldEmptySubmit = {
  args: {
    error: true,
    errorMsg: "Email field should not be empty !!!"
  }
}

export const EmailFieldInvalidSubmit = {
  args: {
    error: true,
    errorMsg: "Please enter a valid email !!!",
    inputEmail: "email@company"
  }
}