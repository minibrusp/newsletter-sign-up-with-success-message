import SectionHomeCard from "./SectionHomeCard"
import HeroImageDesktop from "../../assets/images/illustration-sign-up-desktop.svg"
import HeroImageMobile from "../../assets/images/illustration-sign-up-mobile.svg"

export default {
  component: SectionHomeCard,
  title: "Components/Organism/SectionHomeCard",
  tags: ["autodocs"],
  args: {
    imgUrlMobile: HeroImageMobile,
    imgUrlDesktop: HeroImageDesktop,
    altText: "Hero Image"
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
    },
  },
  decorators: [
    (Story) => (
      <div className="font-roboto max-w-[375px] p-4">
        <Story />
      </div>
    )
  ],
}

export const Desktop = {
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