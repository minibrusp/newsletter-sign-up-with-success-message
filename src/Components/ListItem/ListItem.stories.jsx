import ListItem from "./ListItem"
import listIconCheck from "../../assets/images/icon-list.svg"

export default {
  component: ListItem,
  title: "Components/Atoms/ListItem",
  tags: ["autodocs"],
  args: {
    text: "And much more",
    listIcon: listIconCheck
  },
  argTypes: {
    listIcon: {
      control: {
        type: "file",
        accpet: ".svg"
      }
    }
  },
  decorators: [
    (Story) => (
      <div className="font-roboto">
        <Story />
      </div>
    )
  ]
}

export const ItemList = {
  args: {
    text: "Product discovery and building what matters"
  }
}