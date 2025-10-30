import React, { useContext, useState } from 'react'
import Usercontext from './ContexsApi/Usercontext'

const UserFormContext = () => {
  const [setusername, setemail] = useContext(Usercontext);
  const [inputusername, setinputusername] = useState("");
  const [inputemail, setinputemail] = useState("");

  const handlesubmit = (e) => {
    e.prevantDefault();

    setusername(inputusername);
    setemail(inputemail);

  };

    return (
    <div>
        <form onSubmit={handlesubmit}>
        <h2>Form Of context api:- </h2>
        username :
        <input type="text" 
        value={inputusername} 
        onChange={(e)=>setinputusername(e.target.value)}/>
        
        <input type="text"
        value={inputemail}
        onChange={(e)=>setinputemail(e.target.value)} />

        <button type='submit'>Submit</button>
        </form>

    </div>
  )
}

export default UserFormContext