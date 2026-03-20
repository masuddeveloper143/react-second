
import './App.css'

function App() {


  function handleClick() {
    alert("I am cliked");


    const handleClick3 = () => {
      alert("click3")
    }

  }

  return (
    <>
      <h1>vite+react</h1>
      {/* <button onClick="handleClick()">lick me</button> */}


      <button onClick={handleClick}>click me</button>


      <button onClick={function handleClick2() {
        alert('cliked 2');
      }}>click me2</button>


      <button onClick={handleClick3}></button>


    </>
  )
}

export default App
