import Home from "./Home"

export default {
  component: Home,
  title: "Pages/Home",
  tags: ["autodocs"],
  
  parameters: {
    layout: "fullscreen",
  },
}

export const HomePage = {}

export const Mobile = {
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
  parameters: {
    viewport: {
      defaultViewport: "FEMDESKTOP"
    },
  },
}