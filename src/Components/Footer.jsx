import React from 'react'

const Footer = () => {
  return (
    <div>
        <Name year = "1974" company = "old monk" />
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