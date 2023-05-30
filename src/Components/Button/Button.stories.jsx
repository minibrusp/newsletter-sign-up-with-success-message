import Button from "./Button"

export default {
  component: Button,
  title: "Components/Atoms/Button",
  tags: ["autodocs"],
  args: {
    text: "This is button"
  },
  decorators: [
    (Story) => (
      <div className="font-roboto">
        <Story />
      </div>
    )
  ]
}

export const Subscribe = {
  args: {
    text: "Subscribe to monthly newsletter"
  }
}

export const Dismiss = {
  args: {
    text: "Dismiss message"
  }
}