import React, { useState } from 'react'

const UseStateArray = () => {
    const user = [
        { id: 0, myName:"Avinash", myAge:22 },
        { id: 1, myName:"Abhijeet", myAge:25 },
        { id: 2, myName:"Sameer", myAge:21 },
    ];

   const [myArray, setMyArray] =  useState(user);

    const clearArray = () =>{
        setMyArray([]);
        }
        const removeLM = (id) =>{
           const newArray = myArray.filter((currEle) => {
            return currEle.id !== id;
           })

           setMyArray(newArray);
        }
  return (
    <>
        {
            myArray.map((user)=>{
                return (

                    <h1 key={user.id}>Name is {user.myName} and My Age is {user.myAge}
                    <button onClick={() => removeLM(user.id)}>Remove</button>
                    </h1>

                    )
               
               
            })
        }
        <button onClick={clearArray}>Clear</button>
    </>
  )
}

export default UseStateArray