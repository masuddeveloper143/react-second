
import './App.css'

function App() {


  function handleClick() {
    alert("I am cliked");
  }

  const handleClick3 = () => {
    alert("click3")
  }


  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>
      <h1>vite+react</h1>
      {/* <button onClick="handleClick()">lick me</button> */}


      <button onClick={handleClick}>click me</button>


      <button onClick={function handleClick2() {
        alert('cliked 2');
      }}>click me2</button>


      <button onClick={handleClick3}>click me3</button>

      <button onClick={() => alert("click me4")}>click me4</button>

      <button onClick={() => handleAdd5(5)}>click me5</button>


    </>
  )
}

export default App
