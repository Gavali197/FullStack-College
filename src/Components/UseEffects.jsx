//this code are without dependency

// import React, { useEffect } from 'react'

// function UseEffects() {
//     useEffect(()=>{
//         console.log("Welcome Components Mounted ! 💥");
        
//     }, [])
//   return (
//     <div>
//         <h2>Hello World</h2>
//     </div>
//   )
// }

// export default UseEffects


//With Dependencys

import React, { useEffect, useState } from 'react'

function UseEffects() {
  const [name, setname] = useState("");

  useEffect(()=>{
    console.log(`name is changed : ${name}`);
  }, [name]);

    return (
    <div>
        <input type="text" value={name} onChange={(e)=> setname(e.target.value)} />
        <p>Your Name is : {name}</p>
    </div>
  );
}

export default UseEffects