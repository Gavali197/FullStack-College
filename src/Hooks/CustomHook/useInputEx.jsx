// import React, { useState } from 'react'

// function useInput(initialValue = "") {
//     const [value, setvalue] = useState(initialValue);

//     const onChange = (e) => {
//         setvalue(e.target.value);
//     }

//     const reset = () => setvalue("");

//   return {value, onChange, reset}
// }

// export default useInput


// {this file for implement useInput in}

import React from 'react'
import useInput from './useInput'

function useInputEx() {
    const email = useInput(""); //use tu
    const password = useInput("");

  return (
    <div>
        email <input type="text" {...email} />
        password <input type="text" {...password} />
        <button>Login</button>
    </div>
  )
}

export default useInputEx