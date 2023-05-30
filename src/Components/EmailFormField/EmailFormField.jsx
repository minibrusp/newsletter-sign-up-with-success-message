import Input from "../Input/Input"
import Label from "../Label/Label"
import ErrorMessage from "../ErrorMessage/ErrorMessage"

export default function EmailFormField({ id, text, type, placeholder, error, errorMsg, ...props }) {
  return (
    <div className="form__email flex flex-col justify-center items-start gap-2">
      
      <div className="form__email__text leading-tight">
        <Label
          labelFor={id}
          text={text}
        />
        { error ? (
          // <div className="form__email__error">
          //   <span className="text-primary-tomato text-sm font-bold">Please enter a valid email !!!</span>
          // </div>
          <ErrorMessage errorMessage={errorMsg || "Please enter a valid email !!!"} />
          )
          : null
        }
      </div>
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        error={error}
        {...props}
      />
    </div>
  )
}
