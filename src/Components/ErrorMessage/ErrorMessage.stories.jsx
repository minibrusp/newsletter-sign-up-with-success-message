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
    errorMessage: "Please enter a valid email !!!"
  }
}