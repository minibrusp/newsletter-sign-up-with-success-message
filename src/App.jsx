import Home from "./Pages/Home/Home"
import { FormContextProvider } from "./Context/FormContext"

function App() {


  return (
    <div className="App">
      <FormContextProvider>
        <Home />
        <footer class="attribution md:bg-neutral-charcoal-grey font-roboto text-sm w-full text-center tracking-widest m-0 p-4">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer" className="hover:text-neutral-white text-primary-tomato">Frontend Mentor</a>. 
          Coded by <a href="https://www.frontendmentor.io/profile/minibrusp" target="_blank" rel="noreferrer" className="hover:text-neutral-white text-primary-tomato">XIII</a>.
        </footer>
      </FormContextProvider>
    </div>
  )
}

export default App
