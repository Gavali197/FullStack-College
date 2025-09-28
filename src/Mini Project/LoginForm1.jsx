import React, { use, useState } from 'react'

function LoginForm1() {
  const [user, setuser] = useState("");
  const [email, setemail] = useState("");
  const [PassWord,setpassword] = useState("");
  const [conpassm, setconpass] = useState("");
    
 const handlesubmit = (e) =>{
    e.preventDefault();
    console.log(`${user}, ${email}, ${PassWord}, ${conpassm}`);
  
    //use for 
    // setuser("");
    // setemail("");
    // setpassword("");
    // setconpass("");
 }

 const validation = () => {
    if(PassWord == conpassm){

    }
 }

  return (
    <div>
        <form onSubmit={handlesubmit}>
        <div className="container">
            <label>Enter Name : </label>
            <input type="text" value={user} onChange={(e)=>setuser(e.target.value)} required /> <br />

            
            <label>Enter Email : </label>
            <input type="text" value={email} onChange={(e)=>setemail(e.target.value)} required /> <br />

            
            <label>Enter Password : </label>
            <input type="text" value={PassWord} onChange={(e)=>setpassword(e.target.value)} required /> <br />

            
            <label>Enter Confirm Password : </label>
            <input type="text" value={conpassm} onChange={(e)=>setconpass(e.target.value)} required /> <br />
            
        </div>
        <button type="submit">Submit</button>
        </form>       
    </div>
  )
}

export default LoginForm1