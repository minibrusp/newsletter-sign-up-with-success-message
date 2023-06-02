import PropTypes from "prop-types"

import Input from "../Input/Input"
import Label from "../Label/Label"
import ErrorMessage from "../ErrorMessage/ErrorMessage"

export default function EmailFormField({ id, text, type, placeholder, error, errorMsg, ...props }) {
  return (
    <div className="form__email flex flex-col justify-center items-start gap-2 w-full">
      {/* max-w-[375px] md:max-w-[376px] */}
      <div className="form__email__text leading-tight flex flex-row justify-between items-center w-full">
        <Label
          labelFor={id}
          text={text}
        />
        { error ? (
          <ErrorMessage errorMessage={errorMsg || "valid email required"} />
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

EmailFormField.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.bool,
  errorMsg: PropTypes.string
}

EmailFormField.defaultProps = {
  id: "",
  text: "",
  placeholder: "",
  error: false,
  errorMessage: ""
}