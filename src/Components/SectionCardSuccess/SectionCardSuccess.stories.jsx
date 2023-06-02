import SectionCardSuccess from "./SectionCardSuccess"
import successIcon from "../../assets/images/icon-success.svg"
import { FormContextProvider } from "../../Context/FormContext"

export default {
  component: SectionCardSuccess,
  title: "Components/Organism/SectionCardSuccess",
  tags: ["autodocs"],
  args: {
    imgSrc: successIcon,
    imgAltText: "check icon",
    size: "medium",
    headingText: "Thanks for subscribing!",
    email: "ash@loremcompany.com",
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
  parameters: {
    backgrounds: {
      default: 'mainBackground',
      values: [
        {name: "mainBackground", value: "hsla(235, 18%, 26%, 1)"}
      ]
    },
    
  },
  decorators: [
    (Story) => (
      <FormContextProvider>
        <Story />
      </FormContextProvider>
    )
  ],
  
}

export const Mobile = {
  parameters: {
    viewport: {
      defaultViewport: "FEMMOBILE"
    },
    layout: "fullscreen"
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