import React, { useState } from 'react'

function ControlledForm() {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");

const handleSubmit = (e) =>{
    e.preventDefault();
    alert(` user Email : ${email}, User PassWord : ${pass}`);
    setemail("");
    setpass("");
};

    return (
    <div>
        <form onSubmit={handleSubmit}>
            Enter Email :
            <input type="text" value={email} onChange={(e)=>setemail(e.target.value)}/> <br />
            PassWord :
            <input type="text" value={pass} onChange={(e)=>setpass(e.target.value)} /> <br />  
            <button type="submit">Submit Form</button>
        </form>
    </div>
  )
}

export default ControlledForm