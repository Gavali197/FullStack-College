import React from 'react'
import { useState } from 'react';

const AdminController = () => {
    const [form, setform] = useState({name: "", age: "", city:""})
    const [error, seterror] = useState("");
    const [success, setsuccess] = useState("");


    const insertHandle = async (e) => {
        e.preventDefault();
        if(!form.name || !form.age || !form.city){
            seterror("Fill All Filed");
        }else{
            seterror("");
        }

        console.log(form);

        try{
            seterror("");
            const res = await fetch("http://localhost:4000/userlist/api/v2/postAdmin",{
                method:"POST",
                headers : {
                    "Content-Type" : "Application/json",
                },
                body : JSON.stringify(form),
            });

            const data = await res.json();

            if(res.ok){
                setform({name:"", age:"", city:""});
                setsuccess("Data Inserted");
            }else{
                setform(data.message || "Failed Inserted Data");
            }
        }catch(err){
            seterror("Server Not reachable check backend");
            console.error(err);
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setform({...form, [name]:value})
    }
  return (
    // <div></div>
    <form onSubmit={insertHandle}>
        {success && <p style={{color:"green"}}>{success}</p>}
        <h1>
            Insert Admin Of The Side
        </h1>

        name <input type="text" value={form.name} onChange={handleChange} name='name'/>
        Age <input type="text" value={form.age} onChange={handleChange} name='age'/>
        City <input type="text" value={form.city} onChange={handleChange} name='city'/>

        <button type='submit'>Insert data</button>
        {error && <p style={{color: "red"}}>{error}</p>}
    </form>
  )
}

export default AdminController