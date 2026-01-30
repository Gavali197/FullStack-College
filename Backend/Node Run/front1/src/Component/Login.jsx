import React from 'react'
import API from '../Services/api'


const Login = async () => {
    try{
        const res = await API.post("/auth/login", {
            email: "hemant@gmail.com",
            pasword: "123456"
        });

        localStorage.setItem("token", res.data.token);
    }catch(err){
        console.error(err.responce.data.message);
        console.log("login side error showing");
        
    }
  return (
    <div>Login</div>
  )
}

export default Login