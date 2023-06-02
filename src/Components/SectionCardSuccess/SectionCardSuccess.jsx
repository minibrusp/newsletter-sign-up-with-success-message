import Icon from "../IconComponent/Icon"
import SectionTextContent from "../SectionTextContent/SectionTextContent"
import Button from "../Button/Button"
import successIcon from "../../assets/images/icon-success.svg"
import { useMemo } from "react"

import useFormContext from "../../Hooks/useFormContext"
import useForm from "../../Hooks/useForm"

export default function SectionCardSuccess({
  email: storyEmail, 
  imgSrc = successIcon, 
  imgAltText = "check icon", 
  size = "medium", 
  headingText = "Thanks for subscribing!",
  buttonBgColor, 
  buttonTxtColor, 
  buttonHoverColor, 
  buttonText = "Dismiss message", 
}) {

  const { email } = useFormContext()
  const { dissmiss } = useForm()
  
  const setEmailToParagraphText = useMemo(() => {
    return `A confirmation email has been sent to ${email ? email : storyEmail }. Please open it and click the button inside to confirm your subscription.`
  }, [email, storyEmail])

  const btnClickHandler = () => {
    dissmiss()
  }
  
  return (
    <div className="card__success bg-white p-6 flex flex-col justify-between items-start min-h-screen max-w-[504px] mx-auto md:justify-start md:gap-[2.3rem] md:min-h-min md:py-14 md:px-16 md:rounded-[35px]">
      <div className="card__success__top flex flex-col justify-center items-start gap-10">
        <Icon
          imgSrc={imgSrc}
          imgAltText={imgAltText}
          size={size}
        />
        <SectionTextContent 
          headingText={headingText}
          paragraphText={setEmailToParagraphText}
        />
      </div>
      <Button
        backgroundColor={buttonBgColor}
        textColor={buttonTxtColor}
        hoverBackgroundColor={buttonHoverColor}
        text={buttonText}
        btnClickHandler={btnClickHandler}
      />

    </div>
  )
}
