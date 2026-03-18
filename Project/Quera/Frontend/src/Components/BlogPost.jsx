import React, { useState } from 'react'

const BlogPost = () => {
  const [form, setform] = useState({heading:"", description:"", author:""});
  const [error, seterror] = useState("");
  const [data, setdata] = useState([]);

  const API = "localhost:3030/api/v2/"


  const handleForm = async(e) => {
    e.preventDefault();

    if(!form.heading || !form.description || !form.author){
      seterror("field empty ");
    }

    try{
      const getData = await fetch(`${API}/postblog`, {
        method: "POST",
        headers : {"Content-Type" : "Application/json"},
        body:JSON.stringify(form)
      }) 

      if(getData.ok){
        const newBlog = await getData.json();
        setdata((prev)=> [...prev, newBlog]);
        console.log("Post Blog Success");
      }else{
      const errorData = await getData.json()
      seterror(errorData.message || "Failed To post blog")
      }
    }catch(err){
      seterror(err + "post side server issue")
    }
  }

  const onchange = (e) => {
    const [name, value ] = e.target;
    setform({...form, [name]: value});
  };

  return (
    <div>
      <form onSubmit={handleForm}>
      heading <input type="text" value={form.heading} name='heading' onChange={onchange} placeholder='Big Heading of blog'  />
      description <textarea name="description" value={form.description} onChange={onchange} rows={4} cols={50} placeholder='write what your things...'></textarea>
      author <input type="text" value={form.author} name='author' onChange={onchange} />     
      <button type='submit'>Post Blog</button>
      {error && <p style={{color:"red", fontWeight:"bold"}}>{error}</p>} 
      </form>
    </div>
  )
}

export default BlogPost