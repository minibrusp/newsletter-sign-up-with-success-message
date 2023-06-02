import SectionCardForm from "../SectionCardForm/SectionCardForm"
import SectionTextContent from "../SectionTextContent/SectionTextContent"
import SectionCardImage from "../SectionCardImage/SectionCardImage"
import Form from "../Form/Form"

import HeroImageDesktop from "../../assets/images/illustration-sign-up-desktop.svg"
import HeroImageMobile from "../../assets/images/illustration-sign-up-mobile.svg"


export default function SectionHomeCard({
  altText = "Hero Image", 
  imgUrlDesktop = HeroImageDesktop, 
  imgUrlMobile = HeroImageMobile,
  headingText,
  listItems,
  paragraphText
}) {
  return (
    <div className="bg-neutral-white max-w-[550px] mx-auto md:flex md:mx-0 md:flex-row-reverse md:justify-center md:items-center md:gap-12 md:p-6 md:max-w-[928px] md:rounded-[35px]">
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
