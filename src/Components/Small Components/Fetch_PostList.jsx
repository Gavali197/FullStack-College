// import React, { useEffect, useState } from 'react'

// function Fetch_PostList() {
    
//     const [user, setuser] = useState([]);
//     const [loading, setloding] = useState(true);

//        const FetchUsers = async() =>{
//         try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//         const data = await res.json();
//         setuser(data);
//         } catch (err) {
//             console.error("Errors : ", err);    
//         }finally{
//             setloding(false);
//         }
//        }

//     useEffect(()=>{

//        FetchUsers();
//     }, []);

//     if(loading) return <p style={{color:"blue"}}>Loading..Page.</p>;
//     // if(setloding) return <p style={{color: "red"}}>failed to connect...</p>
//   return (
//     <div>
//         <h1>Post List...</h1>
//         <ul>
//             {user.map((post)=>(
//             <div key={post.id}>
//                 <h3>{post.title}</h3>
//                 <p>{post.body }</p>
//             </div>
//             ))}
//         </ul>
//         <button onClick={FetchUsers}>Reload</button>
//     </div>
//   )
// }

// export default Fetch_PostList


import React, { useEffect, useState } from 'react'

function Fetch_PostList() {
    
    const [user, setuser] = useState([]);
    const [loading, setloding] = useState(true);

    const FetchUsers = async() => {
        try {
            setloding(true); // Set loading to true when starting to fetch
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await res.json();
            setuser(data);
        } catch (err) {
            console.error("Errors : ", err);    
        } finally {
            setloding(false);
        }
    }

    useEffect(() => {
       FetchUsers();
    }, []);

    if(loading) return <p style={{color:"blue"}}>Loading..Page.</p>;

    return (
        <div>
            <h1>Post List...</h1>
            <button onClick={FetchUsers} style={{
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginBottom: '20px'
            }}>
                Reload Posts
            </button>
            <ul>
                {user.map((post)=>(
                <div key={post.id} style={{
                    border: '1px solid #ccc',
                    padding: '15px',
                    margin: '10px 0',
                    borderRadius: '5px'
                }}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
                ))}
            </ul>
        </div>
    )
}

export default Fetch_PostList