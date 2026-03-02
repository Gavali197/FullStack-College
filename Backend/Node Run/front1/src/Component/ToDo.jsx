import React, { useState } from 'react'

const ToDo = () => {
    const [error, seterror] = useState("");
    const [success, setsuccess] = useState("");
    const [form, setform] = useState({task:"", date:"", status:""})

    const API = "http://localhost:4000/userlist/api/v2"

    const handleAdd = async (e) => {
        e.preventDefault();

        if(!form.task || !form.date || !form.status){
            seterror("Add Task Perfectly");
            return
        }

        try{
            const res = await fetch(`${API}/addTask`, {
                method : "POST", headers : {"Content-Type" : "application/json"},
                body : JSON.stringify(form)
            })

            if(res.ok){
                setsuccess("Task Added Successfully");
            }
        }catch(err){
            seterror(err + "The error from add task")
        }

        
    }
  return (
    <>
        <form>
            <h2>Todo With Database</h2>
            task <input type="text" />
        </form>
    </>
)
}

export default ToDo