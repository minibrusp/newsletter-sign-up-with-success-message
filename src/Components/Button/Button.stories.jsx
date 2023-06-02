import Button from "./Button"

export default {
  component: Button,
  title: "Components/Atoms/Button",
  tags: ["autodocs"],
  args: {
    text: "Button",
    backgroundColor: 'hsla(234, 29%, 20%, 1)',
    textColor: 'hsla(0, 0%, 100%, 1)',
    hoverBackgroundColor: 'hsla(4, 100%, 67%, 1)'
  },
  argTypes: {
    backgroundColor: {
      control: {
        type: "color",
      }
    },
    textColor: {
      control: {
        type: "color",
      }
    },
    hoverBackgroundColor: {
      control: {
        type: "color"
      }
    }
  },
  decorators: [
    (Story) => (
      <div className="font-roboto max-w-[350px]">
        <Story />
      </div>
    )
  ]
}

export const Subscribe = {
  args: {
    text: "Subscribe to monthly newsletter",
  }
}

export const Dismiss = {
  args: {
    text: "Dismiss message",
  }
}