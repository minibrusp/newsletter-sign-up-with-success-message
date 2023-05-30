import PropTypes from "prop-types"
import { useState } from "react"

export default function Input({
  value, 
  type, 
  placeholder, 
  id, 
  inputEmail,
  setInputEmail,
  error
}) {


  return (
    <input
      className={`min-w-[327px] p-4 rounded-lg border  ${ error ? 'border-primary-tomato' : 'border-neutral-grey/50' }`} 
      type={type} 
      placeholder={placeholder}
      id={id}
      value={inputEmail}
      onChange={(e) => setInputEmail(e.target.value)} 
    />
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string,
  value: PropTypes.string
}
