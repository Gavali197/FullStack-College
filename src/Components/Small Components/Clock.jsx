import React, { useEffect, useState } from 'react'

function Clock() {
  const [count, setcount] = useState(0);

  useEffect(()=>{
    const interval = setInterval(()=>{
        setcount((e)=> e+1);
    }, 1000)
    return () => clearInterval(interval);
  }, [])
    return (
    <div>
        {count}
    </div>
  )
}

export default Clock