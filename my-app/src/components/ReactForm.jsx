import React, { useState } from 'react'

function ReactForm() {

    const [name, setName] = useState("");

   console.log("current state: ", name);
   
  return (
    <>
      <form action="">
        <label htmlFor=""> Enter Your name: <input type="text" onChange={(e) => { setName (e.target.value) }}  /> </label>
        
      </form>
    </>
  )
}

export default ReactForm