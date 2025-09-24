import React from 'react'

const Header = () => {
  return (
    <div>
        <Title title = "This is my title" subTitle = "this is subtitle" />
        <Title title = "This is my title" subTitle = "this is subtitle" />

    </div>
  )
}


function Title({title, subTitle}) {
  return (
    <div>{title}
    <div className="suTitle">
        {subTitle}
    </div>
    </div>
  )
}


export default Header