import useFormContext from "./useFormContext"
import { useState } from "react"
import emailValidator from "email-validator"

export default function useForm() {
  const [inputEmail, setInputEmail] = useState("")
  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  const { setEmail, setIsFormSuccess } = useFormContext()

  const validateEmail = email => {
    return emailValidator.validate(email)
  }

  const consoleLog = () => {
    console.log("Test")
    console.log(inputEmail)
  }

  const subscribe = () => {
    if(!inputEmail) {
      setError(true)
      setErrorMsg("empty field")
      return
    }

    if(!validateEmail(inputEmail)) {
      setError(true)
      setErrorMsg("valid email required")
      return
    }

    setError(false)
    setErrorMsg("")
    setEmail(inputEmail)
    setInputEmail("")
    setIsFormSuccess(true)

  }

  const dissmiss = () => {
    setTimeout(() => {
      setEmail("")
      setIsFormSuccess(false)
    }, 1000)
  }

  return { inputEmail, setInputEmail, subscribe, dissmiss, error, errorMsg, consoleLog }
}
