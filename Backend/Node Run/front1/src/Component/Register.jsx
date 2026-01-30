import React from 'react'
import API from '../Services/api'

const Register = async () => {

    try{
        const res = await API.post("/auth/register",{
            name: "hemant",
            email: "hemant@gmail.com",
            password: "123456"
        });
        console.log(res.data);
    }catch(err){
        console.error(err.response.data.message);
        console.log("error from frontend side")
    }    

  return (
    <div>Register</div>
  )
}

export default Register