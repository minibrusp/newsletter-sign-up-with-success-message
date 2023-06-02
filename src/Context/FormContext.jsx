import { createContext, useState } from "react";

export const FormContext = createContext()

export const FormContextProvider = ({ children }) => {
  const [email, setEmail ] = useState("")
  const [isFormSuccess, setIsFormSuccess ] = useState(false)


  return (
    <FormContext.Provider value={{email, setEmail, isFormSuccess, setIsFormSuccess}}>
      {children}
    </FormContext.Provider>
  )
}