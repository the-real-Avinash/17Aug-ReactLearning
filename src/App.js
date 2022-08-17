import React, {useState} from 'react'
import './App.css';
import BasicForm from './component/Form/BasicForm';
import UseStateArray from './component/UseStateArray';
import UseStateObject from './component/UseStateObject';
 

function App() {
 
  //  const [myName, setMyName] = useState("Avinash");
  // const clickHandler = () =>{
  //   console.log(myName);
  //   const value = myName;
  //   value === "Avinash" ? setMyName("Avinash Gavandhe"): setMyName("Avinash");
 
  // }

  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>{myName}</h1>
        <button onClick = {clickHandler}>Click Me</button>
      </header> */}
      <UseStateArray/>
      {/* <UseStateObject/> */}
      <BasicForm/>
    </div>
  );
}

export default App;
