import React, { use, useState } from 'react'

function LoginForm1() {
  const [user, setuser] = useState("");
  const [email, setemail] = useState("");
  const [PassWord,setpassword] = useState("");
  const [conpassm, setconpass] = useState("");
  const [error, seterror] =  useState("");

 const handlesubmit = (e) =>{
    e.preventDefault();
    // console.log(`${user}, ${email}, ${PassWord}, ${conpassm}`);
    if(user === ""){
        seterror("User Fill data please !");
    }else if(!email.includes("@")){
        seterror("You email is wrong");
    }else if(PassWord < 6){
        seterror("Your pass Less 6 letter");
    }else if(conpassm !== PassWord){
        seterror("Cheack Password Not Match");
    }else{
        seterror("");
        alert("Form Submit SuccessFully 😊");
    }

     // use for after submit clear box  
    setuser("");
    setemail("");
    setpassword("");
    setconpass("");

 }

  return (
    <div>
        <form onSubmit={handlesubmit}>
        <div className="container">
            <label>Enter Name : </label>
            <input type="text" value={user} onChange={(e)=>setuser(e.target.value)}  /> <br />

            
            <label>Enter Email : </label>
            <input type="text" value={email} onChange={(e)=>setemail(e.target.value)}  /> <br />

            
            <label>Enter Password : </label>
            <input type="text" value={PassWord} onChange={(e)=>setpassword(e.target.value)}  /> <br />

            
            <label>Enter Confirm Password : </label>
            <input type="text" value={conpassm} onChange={(e)=>setconpass(e.target.value)}  /> <br />
            
        </div>
        <button type="submit">Submit</button>
        <p style={{color: "red"}}>{error}</p>
        </form>       
    </div>
  )
}

export default LoginForm1