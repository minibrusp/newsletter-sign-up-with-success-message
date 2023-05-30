import { useEffect, useState } from "react"
import Button from "../Button/Button"
import EmailFormField from "../EmailFormField/EmailFormField"

import emailValidator from "email-validator"

export default function Form() {
  
  const [email, setEmail ] = useState("")
  const [inputEmail, setInputEmail] = useState("")
  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  const validateEmail = email => {
    return emailValidator.validate(email)
  }

  const submitHandler = (e) => {
    e.preventDefault()

    if(!inputEmail) {
      setError(true)
      setErrorMsg("Email field should not be empty !!!")
      return
    }

    if(validateEmail(inputEmail)) {
      setError(false)
      setErrorMsg("")
      setEmail(inputEmail)
    } else {
      setError(true)
      setErrorMsg("Please enter a valid email !!!")
    }
  }

  useEffect(() => {
    console.log(inputEmail);
  },[inputEmail])

  useEffect(() => {
    console.log(email);
  },[email])

  return (
    <form 
      className="form flex flex-col justify-center items-start gap-6" 
      onSubmit={submitHandler}
    >
      <EmailFormField 
        type="email"
        id="email"
        placeholder="email@company.com"
        labelFor="email"
        text="Email address"
        inputEmail={inputEmail}
        setInputEmail={setInputEmail}
        error={error}
        errorMsg={errorMsg}
      />
      <Button 
        text="Subscribe to monthly newsletter"
      />
    </form>
  )
}
