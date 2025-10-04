// import React, { useEffect, useState } from 'react'

// function Fetch() {
//     const [user, setuser] = useState([]);

//     useEffect(()=>{
//         fetch("https://jsonplaceholder.typicode.com/users")
//         .then((responce)=>responce.json())
//         .then((data)=> setuser(data))
//         .catch((error)=> console.log("Error of fetching data : ", error));
//     }, []);

//   return (
//     <div>
//         <ul>
//              {user.map((users)=>(
//                 <li key={users.id}>
//                     {users.name} -- {users.email}
//                 </li>
//              ))}
//         </ul>
//     </div>
//   )
// }

// export default Fetch




import React, { useEffect, useState } from 'react'

function Fetch() {
  const [product, setproduct] = useState([]);
  const [loading, setloding] = useState(true);

  useEffect(()=>{
    const fetchApi = async () => {
        try {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            setproduct(data);
        } catch (error) {
            console.error("Errro => :", error);
        } finally{
            setloding(false);
        }
    }

    fetchApi();
  },[]);


  if(loading) return <p>Loading...Page...</p>


    return (
    <div>
        <h2>Products</h2>
        <ul>
            {product.map((item)=>(
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>Prices : {item.price}</p>
                </div>
            ))}
        </ul>
    </div>
  )
}

export default Fetch