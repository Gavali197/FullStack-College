import React, { useState } from 'react'

const Footer = () => {
  function

  return (
    <div>
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