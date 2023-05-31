import Paragraph from "./Paragraph"

export default { 
  component: Paragraph,
  title: "Components/Atoms/Paragraph",
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

export const HomeParagraph = {
  args: {
    text: "Join 60,000+ product managers receiving monthly updates on:"
  }
}

export const SuccessParagraph = {
  args: {
    text: "A confirmation email has been sent to ash@loremcompany.com. Please open it and click the button inside to confirm your subscription."
  }
}

export const MultipleEmailParagraph = {
  args: {
    text: "lorem hello@kitty.cat 123 345 567 789 ash@loremcompany.com. Please open woofwoof@doggy.dog it and click the button inside to confirm your subscription."
  }
}

