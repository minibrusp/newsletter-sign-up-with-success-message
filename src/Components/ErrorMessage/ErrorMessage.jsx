export default function ErrorMessage({ errorMessage="Please enter a valid email !!!" }) {
  return (
    <div className="form__email__error">
      <span className="text-primary-tomato text-sm font-bold">{errorMessage}</span>
    </div>
  )
}
