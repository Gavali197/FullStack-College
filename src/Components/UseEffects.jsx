//exaple 1

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

// example 2

// import React, { useEffect, useState } from 'react'

// function UseEffects() {
//   const [name, setname] = useState("");

//   useEffect(()=>{
//     console.log(`name is changed : ${name}`);
//   }, [name]);

//     return (
//     <div>
//         <input type="text" value={name} onChange={(e)=> setname(e.target.value)} />
//         <p>Your Name is : {name}</p>
//     </div>
//   );
// }

// export default UseEffects


// example 3

//this example of timer example to useeffects

// import React, { useEffect, useState } from 'react'

// function UseEffects() {
//   const [count, setcount] = useState(0);

//   useEffect(()=>{
//     const interval = setInterval(()=>{
//         setcount((e)=> e+1);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//     return (
//     <div>
//         <h2>secound passed : {count}</h2>
//     </div>
//   )
// }

// export default UseEffects

