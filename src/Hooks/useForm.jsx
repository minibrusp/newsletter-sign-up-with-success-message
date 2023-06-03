import useFormContext from "./useFormContext"
import { useState } from "react"
import emailValidator from "email-validator"

export default function useForm() {
  const [inputEmail, setInputEmail] = useState("")
  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { setEmail, setIsFormSuccess } = useFormContext()

  const validateEmail = email => {
    return emailValidator.validate(email)
  }

  const consoleLog = () => {
    console.log("Test")
    console.log(inputEmail)
  }

  const subscribe = async () => {
    setError(false)
    setErrorMsg("")
    setIsLoading(true)


    if(!inputEmail) {
      setError(true)
      setErrorMsg("empty field")
      setIsLoading(false)
      return
    }

    if(!validateEmail(inputEmail)) {
      setError(true)
      setErrorMsg("valid email required")
      setIsLoading(false)
      return
    }

    if(inputEmail === "email@company.com") {
      setError(false)
      setIsLoading(false)
      setErrorMsg("")
      setEmail(inputEmail)
      setInputEmail("")
      setIsFormSuccess(true)

      return 
    }

    try {
      const data = {
        "email": inputEmail
      }

      // const response = await fetch(`http://localhost:4001/subscribe`, {
      const response = await fetch(`https://newsletter-sign-up-with-success-message-backend.vercel.app/subscribe`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        }
      })

      const json = await response.json()

      if(response.ok) {
        console.log(json);
        setIsLoading(false)
        setError(false)
        setErrorMsg("")
        setEmail(inputEmail)
        setInputEmail("")
        setIsFormSuccess(true)
        return
      }
 
      if(!response.ok) {
        if(json.error.status === 400) {
          throw Error(`${inputEmail} already subscribed`)
        }
      }

    } catch(err) {
      setError(true)
      setErrorMsg(err.message)
      setIsLoading(false)
    }

  }



  const dissmiss = () => {
    setTimeout(() => {
      setEmail("")
      setIsFormSuccess(false)
    }, 500)
  }

  return { inputEmail, setInputEmail, subscribe, dissmiss, error, errorMsg, consoleLog, isLoading }
}
