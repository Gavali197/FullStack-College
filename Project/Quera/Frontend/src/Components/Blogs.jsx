import React, { useEffect, useState } from 'react'

const Blogs = () => {
    const [data, setdata] = useState([]);
    
      const API = "http://localhost:3030/api/v2/getBlog";

      const getBlog = async() => {
        try{
            const res = await fetch(`${API}/:id`);
        const result = res.json()
        setdata(result);
        }catch(err){
            console.error(err + "error from user blog side");
        }
      }

      useEffect(()=>{
        getBlog()
      }, []);

  return (
    <div>
        {data.map((item, index)=>(
            <div className="blogpost" key={index}>
                <h1>{item.heading}</h1>
                <h4>
                    {item.description}
                </h4>
                <h5><i><b>
                    {item.author}
                    </b></i></h5>
            </div>
        ))}
    </div>
  )
}

export default Blogs