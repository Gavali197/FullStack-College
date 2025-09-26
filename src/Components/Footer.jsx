import React from 'react'

const Footer = () => {
  return (
    <div>
        <Name year = "1974" company = "old monk" />
        <button onClick={()=>loginStatus}>Cheack login Status here</button>
    </div>
  )
}

function loginStatus({isLoged}) {
  if(isLoged){
    return <h1>Login Here</h1>
  }else{
    return <h1>Not login here</h1>
  }
}
const isLoged = true;

function Name({year, company}) {
    return(
        <div>
        {year}
        <br/>
        {company}
        </div>
    )
}

export default Footer