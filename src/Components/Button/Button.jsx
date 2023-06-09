import PropTypes from "prop-types"
import { useMemo, useState } from "react"

export default function Button({ type ="submit", backgroundColor, textColor, hoverBackgroundColor, text, btnClickHandler, isLoading }) {
  const [isHover, setIsHover] = useState(false)

  const computedBackgroundColor = useMemo(() => {
    return backgroundColor ? {backgroundColor: backgroundColor} : null
  }, [backgroundColor])

  const computedTextColor = useMemo(() => {
    return textColor ? { color: textColor } : null
  }, [textColor])

  const computedHoverBgColor = useMemo(() => {
    return hoverBackgroundColor ? { backgroundColor: hoverBackgroundColor } : null
  }, [hoverBackgroundColor])

  const handleMouseEnter = () => {
    setIsHover(true);
  }

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const currentBackgroundColor = useMemo(() => {
    return isHover ? computedHoverBgColor : computedBackgroundColor
  }, [isHover, backgroundColor, hoverBackgroundColor])

  return (
    <button 
      className={
        `
          ${backgroundColor ? '' : 'bg-neutral-dark-slate-grey'}
          ${textColor ? '' : 'text-neutral-white' }
          ${hoverBackgroundColor ? '' : 'hover:bg-primary-tomato' } 
          p-4 rounded-lg font-bold hover:shadow-2xl
          w-full
          max-w-[550px]
        `
      }
      
      type={type ? "submit" : "button"}
      
      style={{...currentBackgroundColor, ...computedTextColor}}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={btnClickHandler}
      disabled={isLoading}
    >
      {!isLoading && text}
      {isLoading && "Loading..."}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  isLoading: PropTypes.bool
}

Button.defaultProps = {
  text: "Button",
  backgroundColor: null,
  textColor: null,
  isLoading: false
}
