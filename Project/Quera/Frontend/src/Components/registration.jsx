import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const registration = () => {
  const [form, setform] = useState({name:"", email:"", password:""})
  const [error, seterror] = useState("");
  const navigate = useNavigate();

  const onchange = (e) => {
    const {name, value} = e.target;
    setform(...form, {[name]:value})
  }

  const API = "localhost:3030/api/v2"

  const cpassword = document.getElementById()

  const handlForm = async(e) => {
    if(!form.name || !form.email || !form.password){
      seterror("Field are Empty");
    }else if(form.name < 3){
      seterror("user Name length at least 3 char")
    }else if(form.email < 5 || form.email.includes("@") || !form.email.toLowerCase()){
      seterror("invalid email")
    }else if(form.password < 6){
      seterror("Password are at least six char")
    }else if(form.password === cpassword){
      seterror("password not match")
    }else {
      seterror("");
    }

    try{
      const res = await fetch(`${API}/register`, {
        method : "POST",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify(form)
      })

      if(res.ok){
        await res.json();
        alert("User Register Successfully");
        navigate("/login")
      }
    }catch(err){
      console.error(err + "Register side");
    }
  }
  return (
    <div>registration</div>
  )
}

export default registration