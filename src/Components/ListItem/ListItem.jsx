import PropTypes from 'prop-types'
import Icon from "../IconComponent/Icon"
import listIconCheck from "../../assets/images/icon-list.svg"

export default function ListItem({ text, listIcon }) {
  return (
    <li className="text-neutral-charcoal-grey list-none inline-flex gap-4">
      <Icon imgAltText="check icon" imgSrc={listIcon || listIconCheck} />
      <span>{text}</span>
    </li>
  )
}


ListItem.propTypes = {
  text: PropTypes.string.isRequired,
  listIcon: PropTypes.string
}

ListItem.defaultProps = {
  text: '',
  listIcon: null
}