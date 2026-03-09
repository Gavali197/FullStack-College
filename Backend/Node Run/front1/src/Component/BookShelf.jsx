import React from 'react'
import { useState } from 'react'

const BookShelf = () => {
  const [form, setform] = useState({ book : "", auther:"", price:"", rating:"", createdAt:"" });
  const [error, seterror] = useState("");
  const [success, setsuccess] = useState("");
  const [data, setdata] = useState([]);

  const API = "http://localhost:4000/userlist/api/v2";

  const handleBook = async (e) => {
    e.preventDefault();

    if(!form.book || !form.auther || !form.price || !form.rating || !form.createdAt){
        seterror("Fill All information");
        return
    }

    try{
        const res = await fetch(`${API}/postbook`, {
            method:"POST", 
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(form)
        })

        if(res.ok){
            setsuccess("Book Added")
        }
    }
  }
    return (
    <>
    
    </>
  )
}

export default BookShelf