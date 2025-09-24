import React from 'react'
import ControllerForm from './Small Components/ControllerForm';
import Toggle from './Small Components/Toggle';

const Name = () => {
    let N = "rahul";
  return (
   
    <div>Start New Journy { N }
    <ControllerForm />
    <Toggle />
    <div className="ra">
        <P Name = "jak" />
        <P Name = "Bak" />
    </div>
    <div className="buttonType">
        <MyButton text = "Click Me" c = "lightblue" />
        <br />
        <MyButton text = "Submit" c = "lightGreen" />
<br />
        <button onClick={() => alert("Inline Click!")}>Click Me</button>

    </div>
    </div> 
    
  )
}

function MyButton({text, c}) {
    return <button style={{backgroundColor:c}} >{text}</button>
}


const P =(Props)=>{
    return <h3>Hello, {Props.Name}</h3>
}


function EventHandler() {
    const handle = () => {
        alert("Click Buttton")
    }
}

export default Name