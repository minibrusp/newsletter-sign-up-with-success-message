import ImageComponent from "../ImageComponent/ImageComponent"

export default function SectionCardImage({imgUrlMobile, imgUrlDesktop, altText}) {
  return (
    <div className="card__img__container">
      <ImageComponent 
        imgUrlMobile={imgUrlMobile}
        imgUrlDesktop={imgUrlDesktop}
        altText={altText}
      />
    </div>
  )
}
