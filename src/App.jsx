
import './App.css'

function App() {


  function handleClick() {
    alert("I am cliked");
  }

  return (
    <>
      <h1>vite+react</h1>
      {/* <button onClick="handleClick()">lick me</button> */}
      <button onClick={handleClick}>click me</button>

    </>
  )
}

export default App
