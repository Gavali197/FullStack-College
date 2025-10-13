import React, { useEffect, useRef } from 'react'

function UseRef() {
    const fristInput = useRef(null);
    const SecondInput = useRef(null);



    useEffect(()=>{
      if(fristInput.current){
        fristInput.current.focus();
      }
    }, []);


    const handleFocus = () => {
        if(SecondInput.current){
            SecondInput.current.focus();
        }
    }

  return (
    <div>
        <input type="text" ref={fristInput} placeholder='when use fristinput function auto focus' />
        <input type="text" ref={SecondInput} placeholder=' manual data from user click' />
        <button onClick={handleFocus}> Click here</button>
    </div>
  )
}

export default UseRef