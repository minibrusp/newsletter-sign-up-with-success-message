import SectionCardForm from "../SectionCardForm/SectionCardForm"
import SectionTextContent from "../SectionTextContent/SectionTextContent"
import SectionCardImage from "../SectionCardImage/SectionCardImage"
import Form from "../Form/Form"

export default function SectionHomeCard({altText, imgUrlDesktop, imgUrlMobile}) {
  return (
    <div className="bg-neutral-white md:flex md:flex-row-reverse md:justify-center md:items-center md:p-6 md:max-w-[928px] md:rounded-[35px]">
      <SectionCardImage 
        altText={altText}
        imgUrlDesktop={imgUrlDesktop}
        imgUrlMobile={imgUrlMobile}
      />
      <div className="px-5 py-4">
        <SectionCardForm>
          <SectionTextContent
            headingText="Stay updated!"
            listItems={[
              'Product discovery and building what matters',
              'Measuring to ensure updates are a success',
              'And much more!'
            ]}
            paragraphText="Join 60,000+ product managers receiving monthly updates on:"
          />
          <Form />
        </SectionCardForm>
      </div>
    </div>
  )
}
