import SectionCardImage from "./SectionCardImage"
import HeroImageDesktop from "../../assets/images/illustration-sign-up-desktop.svg"
import HeroImageMobile from "../../assets/images/illustration-sign-up-mobile.svg"


export default {
  component: SectionCardImage,
  title: "Components/Organism/SectionCardImage",
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
  }
}

export const CardSectionImage = {
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