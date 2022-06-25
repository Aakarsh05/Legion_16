import ReactDOM from "react-dom"
import Nav from "./Nav"
import Slider from "./Slider"

const App = () => {
  return (
    <>
      <Nav />
      <Slider/>
    </>
    
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
