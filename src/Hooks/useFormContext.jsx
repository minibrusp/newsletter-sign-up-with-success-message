import { FormContext } from "../Context/FormContext"
import { useContext } from "react"

export default function useFormContext() {
  const context = useContext(FormContext)

  if(!context) {
    throw Error("useUserContext must be used inside an UserContextProvider")
  }

  return context
}