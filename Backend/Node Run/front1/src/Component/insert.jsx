import React from "react";
import { useState } from "react";
import { data } from "react-router-dom";

const Insert =async () => {
  const [form, setform] = useState({ name: "", age: "", city: "" });
  const [error, seterror] = useState("");
  const handleInsert = async(e) => {
    e.preventDefault();

    if (!form.name || !form.age || !form.city) {
      seterror("Fill all the filed");
    } else if (form.name.length < 4) {
      seterror("Name are too smalled");
    } else {
      seterror("");
      alert("insert data successfully");
    }

    console.log(form);
    
    
  try{
 seterror(" ");
 const res = await fetch("http://localhost:4000/userlist/api/v2/post", {
    method : "POST", 
    headers: {
        "Content-type" : "application/json",
    },
    body : JSON.stringify(form)
 })

 const data = await res.json();

 if(res.ok){
    alert("data inserted");
    setform({name: "", age:"", city: ""})
 }else{
    seterror(data.message || "failed to inserted data")
 }
  }catch(err){
    seterror(err + "Server error: Make sure backend is running and CORS is enabled")
  }


  };


  const onchange = (e) => {
      const { name, value } = e.target;
      setform({ ...form, [name]: value });
    };
  return (
    <div>
      <form onSubmit={handleInsert}>
        Name{" "}
        <input type="text" value={form.name} onChange={onchange} name="name" />
        Age{" "}
        <input
          type="text"
          value={form.age}
          onChange={onchange}
          name="age"
        />{" "}
        city{" "}
        <input type="text" value={form.city} onChange={onchange} name="city" />
        <button type="submit">insert data</button>
        <br /><br />
        {error && <p style={{color:"red"}}>{error}</p>}
      </form>
    </div>
  );
};

export default Insert;
