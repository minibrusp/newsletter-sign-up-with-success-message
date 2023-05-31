import PropTypes from "prop-types"

export default function Input({
  type, 
  placeholder, 
  id, 
  inputEmail,
  setInputEmail,
  error
}) {


  return (
    <input
      className={`min-w-[327px] p-4 rounded-lg border  ${ error ? 'border-primary-tomato' : 'border-neutral-grey/50' }`} 
      type={type} 
      placeholder={placeholder}
      id={id}
      value={inputEmail}
      onChange={(e) => setInputEmail(e.target.value)} 
    />
  )
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string,
  inputEmail: PropTypes.string
}

Input.defaultProps = {
  type: "email",
  placeholder: "",
  id: "",
  inputEmail: ""
}
