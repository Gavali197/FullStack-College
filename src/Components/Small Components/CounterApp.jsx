import React from 'react'
import { useState } from 'react'


function CounterApp() {
  const [cou, setcou] = useState(0); 
    return (
    <div id='box'>
        <p id="c"> Your Count : {cou}</p>
        <button id='cbtn' onClick={()=> setcou(cou+1)}>Incress Value</button>
        <button id='cbtn' onClick={()=> setcou(cou-1)}>decress Value</button>
        <button id='cbtn' onClick={()=> setcou(0)}>reset Value</button>
    </div>
  )
}

export default CounterApp