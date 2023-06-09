import Button from "../Button/Button"
import EmailFormField from "../EmailFormField/EmailFormField"

import useForm from "../../Hooks/useForm"

export default function Form() {
  const { inputEmail, setInputEmail, error, errorMsg, subscribe, isLoading } = useForm()

  const submitHandler = async (e) => {
    e.preventDefault()
    await subscribe()
  }

  return (
    <form 
      className="form flex flex-col justify-center items-start gap-6 max-w-[550px] md:max-w-[376px]" 
      onSubmit={submitHandler}
    >
      <EmailFormField 
        type="email"
        id="email"
        name="email"
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
        isLoading={isLoading}
      />
    </form>
  )
}
