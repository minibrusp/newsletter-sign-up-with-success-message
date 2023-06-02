import PropTypes from "prop-types"
import { useMemo } from "react"

const DynamicHeadingTag = ({ level, children, computedTextColor, computedLevelStyle }) => {
  const DynamicTag = `h${level}`
  return <DynamicTag 
    className={`
      ${ computedTextColor ? '' : 'text-neutral-dark-slate-grey '}
      ${ computedLevelStyle ? '' : 'text-[2.5rem] '}
      text-[2.5rem] 
      font-bold
      leading-none
      md:text-[3.5rem]
    `}
    style={{...computedTextColor, ...computedLevelStyle}}
    >
      {children}
    </DynamicTag>
}

export default function HeadingText({text, level, textColor}) {
  const computedTextColor = useMemo(() => {
    return textColor ? { color: textColor } : null
  }, [textColor])

  const computedLevelStyle = useMemo(() => {
    switch(level) {
      case 1: 
        return level ? null : null
      case 2: 
        return level ? { fontSize: '2.25rem' } : null
      case 3: 
        return level ? { fontSize: '2rem' } : null
      case 4: 
        return level ? { fontSize: '1.7rem' } : null
      case 5: 
        return level ? { fontSize: '1.5rem' } : null
      case 6: 
        return level ? { fontSize: '1.25rem' } : null
    }
  })
  return (
    <DynamicHeadingTag level={level} computedTextColor={computedTextColor} computedLevelStyle={computedLevelStyle}>
      {text}
    </DynamicHeadingTag>
  )
}

HeadingText.propTypes = {
  text: PropTypes.string.isRequired,
  level: PropTypes.PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  textColor: PropTypes.string
}

HeadingText.defaultProps = {
  text: "",
  level: 1,
  textColor: null
}
