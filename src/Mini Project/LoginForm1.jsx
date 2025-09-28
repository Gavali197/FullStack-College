import React, { use, useState } from 'react'

function LoginForm1() {
  const [user, setuser] = useState("");
  const [email, setemail] = useState("");
  const [PassWord,setpassword] = useState("");
  const [conpassm, setconpass] = useState("");
    
 const handlesubmit = (e) =>{
    e.preventDefault();
    console.log(`${user}, ${email}, ${PassWord}, ${conpassm}`);
    user("");
    email("");
    PassWord("");
    conpassm("");
 }

  return (
    <div>
        <form onSubmit={handlesubmit}>
        <div className="container">
            <label>Enter Your Name : </label>
            <input type="text" value={user} onChange={(e)=>setuser(e.target.value)} required /> <br />

            
            <label>Enter Your Email : </label>
            <input type="text" value={email} onChange={(e)=>setemail(e.target.value)} required /> <br />

            
            <label>Enter Your Name : </label>
            <input type="text" value={PassWord} onChange={(e)=>PassWord(e.target.value)} required /> <br />

            
            <label>Enter Your Name : </label>
            <input type="text" value={conpassm} onChange={(e)=>conpassm(e.target.value)} required /> <br />
            
        </div>
        <button type="submit">Submit</button>
        </form>       
    </div>
  )
}

export default LoginForm1