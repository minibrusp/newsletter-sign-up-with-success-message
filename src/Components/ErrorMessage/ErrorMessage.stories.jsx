import ErrorMessage from "./ErrorMessage"

export default {
  component: ErrorMessage,
  title: "Components/Atoms/ErrorMessage",
  tags: ["autodocs"],
  args: {
    errorMessage: "This is a error"
  },
  decorators: [
    (Story) => (
      <div className="font-roboto">
        <Story />
      </div>
    )
  ]
}

export const EmailFormFieldError = {
  args: {
    errorMessage: "valid email required"
  }
}

export const EmailFormFieldErrorValidEmail = {
  args: {
    errorMessage: "valid email required"
  }
}

export const EmailFormFieldErrorEmptyField = {
  args: {
    errorMessage: "empty field"
  }
}

export const EmailAlreadyASubscriber = {
  args: {
    errorMessage: "email@company.com already subscribed"
  }
}