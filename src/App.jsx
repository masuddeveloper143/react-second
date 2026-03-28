import Batsman from './batsman';
import Users from './user';
import Counter from './counter';
import Friends from './friends';
import './App.css'
import { Suspense } from 'react';
import Posts from './post';





const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json());




const fetchFriends = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  return res.json();
}


const fetchPost = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json();
}




function App() {

  const friendsPromise = fetchFriends();

  const postPromise = fetchPost();

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

      <Suspense fallback={<h3>Post are comming....</h3>}>
        <Posts postPromise={postPromise}></Posts>
      </Suspense>

      {/* <button onClick="handleClick()">lick me</button> */}
      <Counter></Counter>
      <Batsman></Batsman>




      <Suspense fallback={<h3>loding...</h3>}>

        <Users fetchUsers={fetchUsers}></Users>

      </Suspense>




      <Suspense fallback={<h3>friends are comming for treat...</h3>}>
        <Friends friendsPromise={friendsPromise} ></Friends>
      </Suspense>

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
