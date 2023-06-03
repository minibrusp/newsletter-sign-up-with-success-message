import Home from "./Pages/Home/Home"
import { FormContextProvider } from "./Context/FormContext"

function App() {


  return (
    <div className="App">
      <FormContextProvider>
        <Home />
      </FormContextProvider>
    </div>
  )
}

export default App
