import React, { useState } from 'react'

const UseStateObject = () => {

    const [myObject, setMyObject] = useState({
        myName: "Avinash",
        myAge: 22,
        myDegree:"B.E"
    });

    const updateObject = ()=>{
        console.log("Hello");
        setMyObject({...myObject, myName: "Abhijeet"})
    }
  return (
    <div>
        <h1>Name is {myObject.myName} and age is {myObject.myAge} and my Degree is {myObject.myDegree}</h1>
        <button onClick={updateObject}>Update</button>
    </div>
  )
}

export default UseStateObject