import PropTypes from "prop-types"

// import HeroImageDesktop from "../../assets/images/illustration-sign-up-desktop.svg"
// import HeroImageMobile from "./../assets/images/illustration-sign-up-mobile.svg"

export default function ImageComponent({imgUrlMobile, imgUrlDesktop, altText}) {
  return (
    <picture className="w-full">
      <source media="(max-width:649px)" srcSet={imgUrlMobile} alt={altText} />
      <source media="(min-width:650px)" srcSet={imgUrlDesktop} alt={altText} />
      <img className="card__img__img" src={imgUrlMobile} alt={altText} />
    </picture>
  )
}

ImageComponent.propTypes = {
  imgUrlMobile: PropTypes.string,
  imgUrlDesktop: PropTypes.string,
  altText: PropTypes.string,
}

ImageComponent.defaultProps = {
  imgUrlMobile: "",
  imgUrlDesktop: "",
  altText: "",
}
