// import React, { useState } from 'react'
// import ControllerForm from './Small Components/ControllerForm';
// import Toggle from './Small Components/Toggle';

// const Name = () => {

//         const [Names, setnames] = useState("");

//     const Handlesubmit = (e) =>{
//         e.preventDefault();
//     }

//     let N = "rahul";
//   return (
   
//     <div>Start New Journy { N }
//     <ControllerForm />
//     <Toggle />
//     <div className="ra">
//         <P Name = "jak" />
//         <P Name = "Bak" />
//     </div>
//     <div className="buttonType">
//         <MyButton text = "Click Me" c = "lightblue" />
//         <br />
//         <MyButton text = "Submit" c = "lightGreen" />
// <br />
//         <button onClick={() => alert("Inline Click!")}>Click Me</button>

//     </div>

// <form onSubmit={Handlesubmit}>
//     <div className='title'>{Names}</div>
//     <input type="text" value={Names} onChange={(e)=>setnames(e.target.value)} />
//     <button type='submit'>Change Title Name</button>
// </form>
//     </div> 
    
//   )
// }

// function MyButton({text, c}) {
//     return <button style={{backgroundColor:c}} >{text}</button>
// }


// const P =(Props)=>{
//     return <h3>Hello, {Props.Name}</h3>
// }


// function EventHandler() {
//     const handle = () => {
//         alert("Click Buttton")
//     }
// }

// export default Name





//Create a PageTitle component → change document.title whenever user types into an input.


import React, { useEffect, useState } from 'react'

function Name() {
  const [title, settitle] = useState("");

  useEffect(()=>{
    document.title = title ? title : "react app";   //use ternary opertor for if (?, true) else (:, false)
  }, [title])
    return (
      //🧿
    <div>
        <title>Hello Guru</title>
        <input type="text" value={title} onChange={(e)=> settitle(e.target.value)} />
    </div>
  )
}

export default Name