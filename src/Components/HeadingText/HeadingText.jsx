import PropTypes from "prop-types"

export default function HeadingText({text}) {
  return (
    <h1>This is Sparta !!! </h1>
  )
}

HeadingText.propTypes = {
  text: PropTypes.string.isRequired
}

HeadingText.defaultProps = {
  text: ""
}
