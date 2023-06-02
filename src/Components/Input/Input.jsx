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
    // min-w-[327px] 
      className={`
        p-4 
        rounded-lg border  
        ${ error ? 'border-primary-tomato bg-primary-tomato/10 text-primary-tomato placeholder:text-primary-tomato/30 focus-visible:outline-none ' : 'border-neutral-grey/50' }
        w-full
        `} 
        // md:min-w-[376px]
        // max-w-[376px] 
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
