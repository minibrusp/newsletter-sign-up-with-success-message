import PropTypes from "prop-types"
import ListItem from "../ListItem/ListItem"

export default function List({listItems}) {
  return (
    <ul className="flex flex-col gap-2">
      {
        listItems?.map((list, index) => (
          <ListItem key={index} text={list} />
        ))
      }
    </ul>
  )
}

List.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.string)
}

List.defaultProps = {
  listItems: []
}


