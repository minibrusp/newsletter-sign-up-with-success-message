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
  decorators: [
    (Story) => (
      <div className="font-roboto">
        <Story />
      </div>
    )
  ]
}

export const Email = {
  args: {
    type: "email",
    placeholder: "email@company.com",
    id: "email",
    value: null,
    error: false
  },
  parameters: {
    value: {
      controls: "text"
    }
  }
}

export const Error = {
  args: {
    type: "email",
    placeholder: "email@company.com",
    id: "email",
    value: null,
    error: true
  },
  parameters: {
    value: {
      controls: "text"
    }
  }
}