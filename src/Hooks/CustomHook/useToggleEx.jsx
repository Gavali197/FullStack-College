// import React, { useState } from 'react'

// function useToggle(initialValue = false) {
//     const [value, setvalue] = useState(initialValue);

//     const toggle = () => setvalue((v)=> !v);

//   return [value, toggle];
// }

// export default useToggle

// import React from 'react'


// ( Toggle Has been use this code in signle custom hook )

import useToggle from "./useToggle"

function useToggleEx() {

    const [show, toggleShow] = useToggle(false);

  return (
    <div>
        <button onClick={toggleShow}>Change Color</button>
    </div>
  )
}

export default useToggleEx