import SectionTextContent from "./SectionTextContent"

export default {
  component: SectionTextContent,
  title: "Components/Molecules/SectionTextContent",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="font-roboto">
        <Story />
      </div>
    )
  ]
}

export const TextContentDefault = {
  args: {
    headingText: "Hi There",
    paragraphText: "who am i?",
    listItems: [
      "I am number 1",
      "I am invicible",
      "I am the cat"
    ]
  },
}

export const TextContentHome = {
  args: {
    headingText: "Stay updated!",
    paragraphText: "Join 60,000+ product managers receiving monthly updates on:",
    listItems: [
      "Product discovery and building what matters",
      "Measuring to ensure updates are a success",
      "And much more!"
    ]
  }
}

export const TextContentSuccess = {
  args: {
    headingText: "Thanks for subscribing!",
    paragraphText: "A confirmation email has been sent to ash@loremcompany.com. Please open it and click the button inside to confirm your subscription."
  }
}