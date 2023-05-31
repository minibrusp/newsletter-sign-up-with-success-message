import Label from "./Label"

export default {
  component: Label,
  title: "Components/Atoms/Label",
  tags: ["autodocs"],
  args: {
    labelFor: null,
    text: "Label"
  },
  argTypes: {
    labelFor: {
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

export const LabelEmail = {
  args: {
    labelFor: null,
    text: "Email address"
  }
}