import React, { useState } from 'react'

function useToggle(initialValue = false) {
    const [value, setvalue] = useState(initialValue);

    const toggle = () => setvalue((v)=> !v);

  return [value, toggle];
}

export default useToggle