import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [counts, setcounts] = useState(0); //[value, updater] 
  return (
    <div>
        <h2>counts : {counts}</h2>
        <button onClick={()=> setcounts(counts + 1)}> incress </button>
        <button onClick={()=> setcounts(counts - 1)}> decress </button>
    </div>
  )
}

export default Counter