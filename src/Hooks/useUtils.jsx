export default function useUtils() {

  const textHasEmailReturnEmail = text => {
    var emailsArray = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    if (emailsArray != null && emailsArray.length) {
        return { email: emailsArray, itHasEmail: true }
    }
    return { itHasEmail: false }
  }

  const splitTextAndInsertEmailWithTag = text => {

    let result = textHasEmailReturnEmail(text)

    // if no email just return text
    if(!result.itHasEmail) return text

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

  }

  const checkTextHasEmailThenWrapStrongTag = (text) => {
    return splitTextAndInsertEmailWithTag(text)
  }



  return { checkTextHasEmailThenWrapStrongTag }
}
