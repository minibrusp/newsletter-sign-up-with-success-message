import PropTypes from "prop-types"
import useUtils from "../../Hooks/useUtils"
import { useMemo } from "react"

export default function Paragraph({text= "hello"}) {
  const { checkTextHasEmailThenWrapStrongTag } = useUtils()

  const checkedText = useMemo(() => {
    return checkTextHasEmailThenWrapStrongTag(text)
  }, [text])

  return (
    <p className="text-neutral-charcoal-grey">{checkedText}</p>
  )
}

Paragraph.propTypes = {
  text: PropTypes.string.isRequired
}

Paragraph.defaultProps = {
  text: ""
}
