import PropTypes from "prop-types"
import { useCallback, useMemo } from "react";

export default function Paragraph({text}) {

  const textHasEmailReturnEmail = useMemo(() => {
    var emailsArray = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    if (emailsArray != null && emailsArray.length) {
        // return { email: emailsArray[0], itHasEmail: true }
        return { email: emailsArray, itHasEmail: true }
    }
    return { itHasEmail: false }
  }, [text])

  const splitTextAndInsertEmailWithTag = useCallback((text) => {
    // let result = textHasEmailReturnEmail
    // const splitText = text.split(result.email)
    // splitText.splice(1, 0, <strong>{result.email}</strong>)
    // return splitText

    let result = textHasEmailReturnEmail
    // console.log(text)
    // const splitText = text.split(result.email[0])
    // splitText.splice(1, 0, <strong>{result.email}</strong>)
    // return splitText

    // console.log(result.email)
    // console.log(splitText)

    // text.split(result.email[1])

    // console.log(text)

    const splittedText = result.email.reduce((accumulator, currentEmail) => {
      console.log("***************************************************************")
      let maxLength = accumulator?.length - 1
      let unFilteredText = accumulator[maxLength]
      console.log("maxlength: ", maxLength)
      console.log("unfiltered text: ",unFilteredText)
      console.log("currentEmail: ", currentEmail)
      console.log("accumulator: ", accumulator)
      let result = unFilteredText.split(currentEmail)
      console.log("result before splice: ", [result])

      // if(maxLength > 0) result.splice(1, 0, <strong>{result.email}</strong>)

      if(maxLength >= 0) result.splice(maxLength - 1, 0, <strong>{result.email}</strong>)
      
      //  console.log("acums & result: ", [accumulator, result])

       console.log("result after splice : ", [result])


       console.log("maxlength - 1 ", maxLength - 1)


       return result


    }, [text])

    console.log("final result: ", splittedText);

  }, [text])

  splitTextAndInsertEmailWithTag(text)

  return (
    <p>Hello</p>
    // <p className="text-neutral-charcoal-grey">{...splitTextAndInsertEmailWithTag(text)}</p>
  )
}

Paragraph.propTypes = {
  text: PropTypes.string.isRequired
}

Paragraph.defaultProps = {
  text: ""
}
