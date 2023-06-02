import SectionCardForm from "../SectionCardForm/SectionCardForm"
import SectionTextContent from "../SectionTextContent/SectionTextContent"
import SectionCardImage from "../SectionCardImage/SectionCardImage"
import Form from "../Form/Form"

export default function SectionHomeCard({
  altText, 
  imgUrlDesktop, 
  imgUrlMobile,
  headingText,
  listItems,
  paragraphText
}) {
  return (
    <div className="bg-neutral-white md:flex md:flex-row-reverse md:justify-center md:items-center md:gap-12 md:p-6 md:max-w-[928px] md:rounded-[35px]">
      <SectionCardImage 
        altText={altText}
        imgUrlDesktop={imgUrlDesktop}
        imgUrlMobile={imgUrlMobile}
      />
      <div className="px-5 py-4">
        <SectionCardForm>
          <SectionTextContent
            headingText={headingText}
            listItems={listItems}
            paragraphText={paragraphText}
          />
          <Form />
        </SectionCardForm>
      </div>
    </div>
  )
}
