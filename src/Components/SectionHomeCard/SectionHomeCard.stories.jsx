import SectionHomeCard from "./SectionHomeCard"
import HeroImageDesktop from "../../assets/images/illustration-sign-up-desktop.svg"
import HeroImageMobile from "../../assets/images/illustration-sign-up-mobile.svg"

import { FormContextProvider } from "../../Context/FormContext"

export default {
  component: SectionHomeCard,
  title: "Components/Organism/SectionHomeCard",
  tags: ["autodocs"],
  args: {
    imgUrlMobile: HeroImageMobile,
    imgUrlDesktop: HeroImageDesktop,
    altText: "Hero Image",
    headingText: "Stay updated!",
    listItems: [
      'Product discovery and building what matters',
      'Measuring to ensure updates are a success',
      'And much more!'
    ],
    paragraphText: "Join 60,000+ product managers receiving monthly updates on:"

  },
  argTypes: {
    imgUrlDesktop: {
      control: {
        type: "file",
        accept: [".png", ".jpg", ".jpeg", ".gif", ".svg"],
        defaultValue: HeroImageDesktop
      }
    },
    imgUrlMobile: {
      control: {
        type: "file",
        accept: [".png", ".jpg", ".jpeg", ".gif", ".svg"],
        defaultValue: HeroImageMobile
      }
    }
  },
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: 'mainBackground',
      values: [
        {name: "mainBackground", value: "hsla(235, 18%, 26%, 1)"}
      ]
    }
  },
  decorators: [
    (Story) => (
      <FormContextProvider>
        <div className="font-roboto">
          <Story />
        </div>
      </FormContextProvider>
    )
  ],

}

export const Mobile = {
  argTypes: {
    imgUrlDesktop: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    viewport: {
      defaultViewport: "FEMMOBILE"
    },
  },
  decorators: [
    (Story) => (
      <div className="font-roboto max-w-[375px]">
        <Story />
      </div>
    )
  ],
}

export const Desktop = {
  argTypes: {
    imgUrlMobile: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    viewport: {
      defaultViewport: "FEMDESKTOP"
    },
  },
  decorators: [
    (Story) => (
      <div className="font-roboto p-4">
        <Story />
      </div>
    )
  ],
}