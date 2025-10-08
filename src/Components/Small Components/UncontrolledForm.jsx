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


import React, { useRef } from 'react'



function UncontrolledForm() {

    const inputFocus = useRef(null);

    return (
    <div>

    </div>
  )
}

export default UncontrolledForm