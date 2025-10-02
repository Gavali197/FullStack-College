// import React, { useEffect, useState } from 'react'

// function Clock() {
//   const [count, setcount] = useState(0);

//   useEffect(()=>{
//     const interval = setInterval(()=>{
//         setcount((e)=> e+1);
//     }, 1000)
//     return () => clearInterval(interval);
//   }, [])
//     return (
//     <div>
//         {count}
//     </div>
//   )
// }

// export default Clock























import React, { useEffect, useState } from 'react'

function Clock() {
  const [timer, settime] = useState(new Date());

  useEffect(()=>{
     const timer = setInterval(()=>{
      settime(new Date());
     }, 1000);

     return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>{timer.toLocaleTimeString()}</h1>
    </div>
  )
}

export default Clock