import Form from "../Form/Form"
import SectionTextContent from "../SectionTextContent/SectionTextContent"
import SectionCardForm from "./SectionCardForm"
import { FormContextProvider } from "../../Context/FormContext"


export default {
  component: SectionCardForm,
  title: "Components/Organism/SectionCardForm",
  tags: ["autodocs"],
  args: {
    children: [
      <SectionTextContent
        key="0"
        headingText="Stay updated!"
        paragraphText="Join 60,000+ product managers receiving monthly updates on:"
        listItems={[
          "Product discovery and building what matters",
          "Measuring to ensure updates are a success",
          "And much more!"
        ]}
      />,
      <Form key="1" />
    ]
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
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
  ]
}

export const Mobile = {
  parameters: {
    viewport: {
      defaultViewport: "FEMMOBILE"
    }
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
    }
  }
}


