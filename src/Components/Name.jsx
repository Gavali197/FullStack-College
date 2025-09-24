import React from 'react'

const Name = () => {
    let N = "rahul";
  return (
    <div>Start New Journy { N }
    <div className="ra">
        <P Name = "jak" />
        <P Name = "Bak" />
    </div>
    <div className="buttonType">
        <MyButton text = "Click Me" c = "lightblue" />
        <br />
        <MyButton text = "Submit" c = "lightGreen" />

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
export default Name