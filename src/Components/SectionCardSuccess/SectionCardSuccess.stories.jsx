import SectionCardSuccess from "./SectionCardSuccess"
import successIcon from "../../assets/images/icon-success.svg"

export default {
  component: SectionCardSuccess,
  title: "Components/Organism/SectionCardSuccess",
  tags: ["autodocs"],
  args: {
    imgSrc: successIcon,
    imgAltText: "check icon",
    size: "medium",
    headingText: "Thanks for subscribing!",
    paragraphText: "A confirmation email has been sent to ash@loremcompany.com. Please open it and click the button inside to confirm your subscription.",
    buttonBgColor: 'hsla(234, 29%, 20%, 1)',
    buttonTxtColor: 'hsla(0, 0%, 100%, 1)',
    buttonHoverColor: 'hsla(4, 100%, 67%, 1)',
    buttonText: "Dismiss message"
  },
  argTypes: {
    imgSrc: {
      control: {
        type: "file",
        accept: ".svg"
      }
    }
  },
  decorators: [
    (Story) => (
      <div className="font-roboto">
        <Story />
      </div>
    )
  ],
  
}

export const Mobile = {
  parameters: {
    viewport: {
      defaultViewport: "FEMMOBILE"
    }
  },
  decorators: [
    (Story) => (
      <div className="font-roboto max-w-[375px]">
        <Story />
      </div>
    )
  ]
}

export const Desktop = {
  decorators: [
    (Story) => (
      <div className="font-roboto max-w-[504px]">
        <Story />
      </div>
    )
  ],
  parameters: {
    viewport: {
      defaultViewport: "FEMDESKTOP"
    },
    backgrounds: {
      default: 'mainBackground',
      values: [
        {name: "mainBackground", value: "hsla(235, 18%, 26%, 1)"}
      ]
    }
  }
}