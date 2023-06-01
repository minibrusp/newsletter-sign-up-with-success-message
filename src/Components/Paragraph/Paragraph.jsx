import PropTypes from "prop-types"
import { useCallback, useMemo } from "react";

export default function Paragraph({text}) {

  const textHasEmailReturnEmail = useMemo(() => {
    var emailsArray = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    if (emailsArray != null && emailsArray.length) {
        return { email: emailsArray, itHasEmail: true }
    }
    return { itHasEmail: false }
  }, [text])

  const splitTextAndInsertEmailWithTag = useCallback((text) => {

    let result = textHasEmailReturnEmail

    const splittedText = result.email.reduce((accumulator, currentEmail, currentIndex) => {

      let maxLength = accumulator?.length - 1
      let unFilteredText = accumulator[maxLength]

      let result = unFilteredText.split(currentEmail)
      let resultMaxLength = result?.length - 1

      if(maxLength >= 0) result.splice(resultMaxLength, 0, <strong key={currentIndex}>{currentEmail}</strong>)
      
      accumulator.pop()

      return [...accumulator,...result]

    }, [text])

    return splittedText

  }, [text])

  return (
    <p className="text-neutral-charcoal-grey">{splitTextAndInsertEmailWithTag(text)}</p>
  )
}

Paragraph.propTypes = {
  text: PropTypes.string.isRequired
}

Paragraph.defaultProps = {
  text: ""
}
