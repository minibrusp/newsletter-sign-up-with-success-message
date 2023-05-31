import PropTypes from "prop-types"

const getVariantStyle = (size) => {
  switch(size) {
    case "small":
      return "h-[21px] w-[21px]"
    case "medium":
      return "h-16 w-16"
  }
}

export default function Icon({ imgSrc, imgAltText, size }) {
  return (
    <img className={`${getVariantStyle(size)}`} src={imgSrc} alt={imgAltText} />
  )
}

Icon.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAltText: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium"])
}

Icon.defaultProps = {
  imgSrc: null,
  imgAltText: null,
  size: "small"
};