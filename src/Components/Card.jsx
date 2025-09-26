
import React from 'react'

const Card = () => {
  return (
    <div>
        <CardName title={"card 1 title"} decription={"this is card 1 of frist"} buttontxt={"click card 1"} />
        <CardName title={"card 2 title"} decription={"this is card 2 of frist"} buttontxt={"click card 2"} />
        <CardName title={"card 3 title"} decription={"this is card 3 of frist"} buttontxt={"click card 3"} />
    </div>
  )
}


function CardName({title, decription, buttontxt}) {
  return(
    <div className="container">
    <div className="title"> {title}</div>
    <div className="bio">{decription}</div>
     <button id="btntxt">{buttontxt}</button>
     </div>
  )
}
export default Card
