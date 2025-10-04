import React, { useEffect, useState } from 'react'

function Fetch_PostList() {
    
    const [user, setuser] = useState([]);
    const [loading, setloding] = useState(true);

    useEffect(()=>{
       const FetchUsers = async() =>{
        try {
        const res = fetch("https://jsonplaceholder.typicode.com/posts");
        const data = res.json();
        setuser(data);
        } catch (err) {
            console.error("Errors : ", err);    
        }finally{
            setloding(false);
        }
       }
       FetchUsers();
    }, []);

    if(loading) return <p style={{color:"blue"}}>Loading..Page.</p>;
    // if(setloding) return <p style={{color: "red"}}>failed to connect...</p>
  return (
    <div>
        <h1>Post List...</h1>
        <ul>
            {user.map((post)=>(
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body }</p>
            </div>
            ))}
        </ul>
    </div>
  )
}

export default Fetch_PostList