import PropTypes from "prop-types"

export default function Label({ labelFor, text}) {
  return (
    <label
      className="text-xs font-bold cursor-pointer" 
      htmlFor={labelFor}
    >
      {text}
    </label>
  )
}

Label.propTypes = {
  labelFor: PropTypes.string,
  text: PropTypes.string.isRequired
}

Label.defaultProps = {
  labelFor: "",
  text: "",
}
