import Icon from "../IconComponent/Icon"
import SectionTextContent from "../SectionTextContent/SectionTextContent"
import Button from "../Button/Button"

export default function SectionCardSuccess({imgSrc, imgAltText, size, headingText, paragraphText, buttonBgColor, buttonTxtColor, buttonHoverColor, buttonText, ...props }) {
  return (
    <div className="card__success bg-white flex flex-col justify-between items-start min-h-[80vh] max-w-[504px] md:justify-start md:gap-[2.3rem] md:min-h-min md:py-14 md:px-16 md:rounded-[35px]">
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
