import HeadingText from "./HeadingText"

export default {
  component: HeadingText,
  title: "Components/Atoms/HeadingText",
  tags: ["autodocs"],
  args: {
    text: "Hello"
  },
  decorators: [
    (Story) => (
      <div className="font-roboto">
        <Story />
      </div>
    )
  ]
}

export const HomeHeader = {
  args: {
    text: "Stay updated!"
  }
}

export const SuccessHeader = {
  args: {
    text: "Thanks for subscribing!"
  }
}