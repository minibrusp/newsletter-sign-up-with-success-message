import PropTypes from "prop-types"

export default function Button({ text, ...props }) {
  return (
    <button 
      className="bg-neutral-dark-slate-grey text-neutral-white min-w-[327px] p-4 rounded-lg font-bold hover:bg-primary-tomato hover:shadow-2xl"
      type="submit"
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired
}
