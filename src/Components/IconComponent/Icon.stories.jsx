import Icon from "./Icon"
import listIcon from "../../assets/images/icon-list.svg"
import successIcon from "../../assets/images/icon-success.svg"

export default {
  component: Icon,
  title: "Components/Atoms/Icon",
  tags: ["autodocs"],
  args: {
    imgSrc: listIcon,
    imgAltText: "check icon",
  },
  argTypes: {
    imgSrc: {
      control: {
        type: "file",
        accept: ".svg"
      }
    }
  }
}

export const IconList = {
  args: {
    size: "small"
  }
}

export const IconSuccess = {
  args: {
    imgSrc: successIcon,
    size: "medium"
  }
}
