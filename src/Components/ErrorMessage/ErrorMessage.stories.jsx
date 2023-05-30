import ErrorMessage from "./ErrorMessage"

export default {
  component: ErrorMessage,
  title: "Components/Atoms/ErrorMessage",
  tags: ["autodocs"],
  args: {
    errorMessage: "This is a error"
  }
}

export const EmailFormFieldError = {
  args: {
    errorMessage: "Please enter a valid email !!!"
  }
}