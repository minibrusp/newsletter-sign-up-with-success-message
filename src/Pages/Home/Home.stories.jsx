import Home from "./Home"
import { FormContextProvider } from "../../Context/FormContext"

export default {
  component: Home,
  title: "Pages/Home",
  tags: ["autodocs"],
  
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <FormContextProvider>
        <div className="">
          <Story />
        </div>
      </FormContextProvider>
    )
  ],
}

export const HomePage = {}

export const Mobile = {
  parameters: {
    viewport: {
      defaultViewport: "FEMMOBILE"
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/pqBRoDpWnjWNAZIlhU2ms7/Untitled?type=design&node-id=90-10&t=KGEueDPhXgILtpAD-4",
      allowFullscreen: true,
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

Desktop.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/pqBRoDpWnjWNAZIlhU2ms7/Untitled?type=design&node-id=90-8&t=KGEueDPhXgILtpAD-4",
    allowFullscreen: true,
  },
};