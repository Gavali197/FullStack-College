// import React, { useState } from 'react'

const Footer = () => {
  function UserList(){
    const users = ["ram", "bam", "kam"];
    return(
      <ul>
        {users.map((user, index)=>(
          <li key={index}>{user}</li>
        ))}
      </ul>
    )
  }

  return (
    <div>
      <UserList />
        <Name year = "1974" company = "old monk" />
        <button>Cheack login Status here</button>
    </div>
  )
}




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