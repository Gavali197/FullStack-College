// import React, { useRef } from 'react'

// function UncontrolledForm() {
//     const nameRef = useRef();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert(`Hello ${nameRef.current.value}`);
//         nameRef.current.value = "";
//     };

//     return (
//     <div>
//         <form onSubmit={handleSubmit}>
//             <label>
//             name :
//             <input type="text" ref={nameRef} />
//             </label>
//             <button type='submit'>Submit</button>
//         </form>
//     </div>
//   )

// }

// export default UncontrolledForm

// import React, { useRef } from 'react'

// function UncontrolledForm() {
//    const inputRef = useRef(null);

//   const handleFocus = () => {
//     // Step 2: Access input DOM element directly
//     inputRef.current.focus();
//   };

//   return (
//     <div>
//       <h2>useRef Example 🚀</h2>
//       <input ref={inputRef} type="text" placeholder="Click the button below..." />
//       <br />
//       <button onClick={handleFocus}>Focus Input</button>
//     </div>
//   );
// }

// export default UncontrolledForm

// ex 2

import React, { useEffect, useRef, useState } from "react";

function UncontrolledForm() {
  const [count, setcount] = useState(0);
  const prevCount = useRef(0);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <div>
      <h2>Current: {count}</h2>
      <h3>Previous: {prevCount.current}</h3>
      <button onClick={() => setcount(count + 1)}>Increase</button>
    </div>
  );
}

export default UncontrolledForm;
