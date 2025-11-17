import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'





import React from 'react'

export const Counter = ({ initialState }) => {
  const [count, setCount] = useState(initialState)
  const [posts, setPosts] = useState([]);
const [query,setQuery]=useState("")
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleSignChange = () => {
    setCount((prev) => prev * -1);
  };
  useEffect(() => {
    fetch
      ("https://jsonplaceholder.typicode.com/posts?_limit=3")
      .then((res) => res.json())
      .then((res) => setPosts(res))
      .catch((err) => console.error(err));
  }, []);


  useEffect(()=>{
    const handleEnter=(e)=>{
      console.log("running keydown")
      if(e.key==="Enter"){
        handleClick()
      }
    }

    document.addEventListener("keydown",handleEnter)
    return ()=>document.removeEventListener("keydown",handleEnter)
  },[query])
const handleClick=async()=>{
  try {
    const data=await fetch("http://localhost:8000/ask",{
    method:"POST",
    headers:{
        "Content-Type": "application/json", 
    },
    body:JSON.stringify({question:query})
  })
  const result=await data.json()
 setPosts(result)
  } catch (error) {
    console.log(error)
  }
}


  return (
    <div><div>
      <p>{count}</p>
    </div>
      <div className="card">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Restart</button>
        <button onClick={handleSignChange}>Sign Change</button>
      </div>
       <div>
      <h1>Posts</h1>
   {!posts ? (
  <p>Loading...</p>
) : (
  <div>
    <p><strong>Question:</strong> {posts?.question}</p>
    <p><strong>Answer:</strong> {posts?.answer}</p>
   
    <p>Confidence: {posts.confidence}</p>
  </div>
)}

    </div>
    <input onChange={(e)=>setQuery(e.target.value)}/><button onClick={handleClick}>Search</button></div>
  )
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Counter initialState={6} />
    </>
  )
}

export default App
