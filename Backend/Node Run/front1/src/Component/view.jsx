import React, { useEffect, useState } from 'react'

const view = () => {
  const [data, setdata] = useState([]);

    const getData = async () => {
      try{
        const res = await fetch("http://localhost:4000/userlist/api/v2/get");
        const result = await res.json();
        setdata(result);
      }
      catch(err){
        console.error("Error fetching Data :", err);
      }
    }
    useEffect(()=>{
      getData()
    }, []);

  return (
    <div>
      <h1>User List :- </h1>
      <table border={1} cellPadding={10}>
        <thead>
        <tr>
          <th>Name : </th>
          <th> Age :  </th>
          <th>City : </th>
        </tr>
        </thead>

        <tbody>
          {data.map((item, index)=>(
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default view