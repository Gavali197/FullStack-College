// import React from 'react'

import { useEffect, useState } from "react";

const Delete = () => {
  const [user, setuser ] = useState([]); 
  const deleteUser = async () => {
    try{
      const res = await fetch("http://localhost:4000/userlist/api/v2/get");
      const result = await res.json();
     setuser(result);
    }catch(err){
      console.error("error from delete user",err);
    }
  }

  useEffect(()=>{
   deleteUser()
  }, [])

  const deleteUsers = async(id) => {
    try{
      await fetch("http://localhost:4000/userlist/api/v2/delete/${id}", {
        method : "DELETE",
      })

      setuser(user.filter(users => users._id !== id))
    }catch(err){
      console.error("Delete failed", err);
      return
    }
  }
  return (
   <>
    <h2>user List</h2>
    <table border={1} cellPadding={10}>
        <thead>
        <tr>
          <th>Name : </th>
          <th> Age :  </th>
          <th>City : </th>
          <th>Action : </th>
        </tr>
        </thead>
        <tbody>
          {user.map((item, index)=>(
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.city}</td>
              <td><button onClick={()=> deleteUsers(item._id)}>DELETE</button></td>
            </tr>
          ))}
        </tbody>
      </table>
   </>
  )
}

export default Delete