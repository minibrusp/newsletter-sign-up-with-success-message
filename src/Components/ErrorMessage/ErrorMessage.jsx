import PropTypes from "prop-types"

export default function ErrorMessage({ errorMessage="valid email required" }) {
  return (
    <div className="form__email__error">
      <span className="text-primary-tomato text-sm font-bold">{errorMessage}</span>
    </div>
  )
}

ErrorMessage.propTypes = {
  errorMessage: PropTypes.string.isRequired
}

ErrorMessage.defaultProps = {
  errorMessage: "valid email required"
}