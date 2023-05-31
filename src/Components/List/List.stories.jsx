import List from "./List"

export default {
  component: List,
  title: "Components/Molecules/List",
  tags: ["autodocs"],
  args: {
    listItems: [
      "Product discovery and building what matters",
      "Measuring to ensure updates are a success",
      "And much more!"
    ]
  },
  decorators: [
    (Story) => (
      <div className="font-roboto">
        <Story />
      </div>
    )
  ]
}

export const UnorderedList = {}