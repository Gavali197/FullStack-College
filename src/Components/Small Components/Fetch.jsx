import React, { useEffect, useState } from 'react'

function Fetch() {
    const [user, setuser] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((responce)=>responce.json())
        .then((data)=> setuser(data))
        .catch((error)=> console.log("Error of fetching data : ", error));
    }, []);

  return (
    <div>
        <ul>
             {user.map((users)=>(
                <li key={users.id}>
                    {users.name} -- {users.email}
                </li>
             ))}
        </ul>
    </div>
  )
}

export default Fetch

