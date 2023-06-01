import Icon from "../IconComponent/Icon"
import SectionTextContent from "../SectionTextContent/SectionTextContent"
import Button from "../Button/Button"

export default function SectionCardSuccess({imgSrc, imgAltText, size, headingText, paragraphText, buttonBgColor, buttonTxtColor, buttonHoverColor, buttonText, ...props }) {
  return (
    <div className="card__success flex flex-col justify-between items-start min-h-[80vh]">
      <div className="card__success__top flex flex-col justify-center items-start gap-10">
        <Icon
          imgSrc={imgSrc}
          imgAltText={imgAltText}
          size={size}
        />
        <SectionTextContent 
          headingText={headingText}
          paragraphText={paragraphText}
        />
      </div>
      <Button 
        backgroundColor={buttonBgColor}
        textColor={buttonTxtColor}
        hoverBackgroundColor={buttonHoverColor}
        text={buttonText}
        {...props}
      />

    </div>
  )
}
