import ImageComponent from "./ImageComponent"
import HeroImageDesktop from "../../assets/images/illustration-sign-up-desktop.svg"
import HeroImageMobile from "../../assets/images/illustration-sign-up-mobile.svg"

export default {
  component: ImageComponent,
  title: "Components/Atoms/ImageComponent",
  tags: ["autodocs"],
  args: {
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
  decorators: [
    (Story) => (
      <div className="max-w-[375px]">
        <Story />
      </div>
    )
  ]
}

export const HeroImage = {
  args: {
    imgUrlMobile: HeroImageMobile,
    imgUrlDesktop: HeroImageDesktop,
    altText: "Hero Image"
  },

}

export const Mobile = {
  args: {
    imgUrlMobile: HeroImageMobile,
  },
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
    }
  },
  decorators: [
    (Story) => (
      <div className="max-w-[375px]">
        <Story />
      </div>
    )
  ]
}

export const Desktop = {
  args: {
    imgUrlDesktop: HeroImageDesktop,
  },
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
    }
  }
}