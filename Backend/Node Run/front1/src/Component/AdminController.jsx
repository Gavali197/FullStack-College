import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { deleteAdmin } from "../../../back1/Controller/AdminController";

const AdminController = () => {
  const [form, setform] = useState({ name: "", age: "", city: "" });
  const [error, seterror] = useState("");
  const [success, setsuccess] = useState("");
  const [data, setdata] = useState([]);

  /*
! Insert user Form Inserthandler Function
*/
  const insertHandle = async (e) => {
    e.preventDefault();
    if (!form.name || !form.age || !form.city) {
      seterror("Fill All Filed");
      return;
    } else {
      seterror("");
    }

    const isDuplicate = data.find(
      (user) =>
        user.name.toLowerCase() === form.name.toLowerCase() &&
        (user.age === form.age ||
          user.city.toLowerCase() === form.city.toLowerCase()),
    );

    if (isDuplicate) {
      seterror("User All ready Register");
      setsuccess(" ");
      return;
    }

    console.log(form);

    try {
      seterror("");
      const res = await fetch(
        "http://localhost:4000/userlist/api/v2/postAdmin",
        {
          method: "POST",
          headers: {
            "Content-Type": "Application/json",
          },
          body: JSON.stringify(form),
        },
      );

      const data = await res.json();

      if (res.ok) {
        setform({ name: "", age: "", city: "" });
        setsuccess("Data Inserted");
      } else {
        setform(data.message || "Failed Inserted Data");
      }
    } catch (err) {
      seterror("Server Not reachable check backend");
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };
  /*
! Get Data From Server handle Server Request
*/
  const getdata = async () => {
    try {
      const res = await fetch("http://localhost:4000/userlist/api/v2/getAdmin");
      const result = await res.json();
      setdata(result);
    } catch (err) {
      console.error("Error Fetching Data : ", err);
    }
  };

  useEffect(() => {
    getdata();
  }, []);


  const DeleteUser = async (id) => {
    try{
      await fetch(`http://localhost:4000/userlist/api/v2/deleteAdmin/${id}`, {
        method : "DELETE",
      });
      setdata((prevUser)=> prevUser.filter((u)=> u._id !== id))
    }catch(err){
      console.error(err)
    }
  }

  ``
  return (
    // <div></div>
    <>
      <form onSubmit={insertHandle}>
        {success && <p style={{ color: "green" }}>{success}</p>}
        <h1>Insert Admin Of The Side</h1>
        name{" "}
        <input
          type="text"
          value={form.name}
          onChange={handleChange}
          name="name"
        />
        Age{" "}
        <input
          type="text"
          value={form.age}
          onChange={handleChange}
          name="age"
        />
        City{" "}
        <input
          type="text"
          value={form.city}
          onChange={handleChange}
          name="city"
        />
        <button type="submit">Insert data</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>

      <div className="userlist">
        <h1>User List</h1>
        <table border={1} cellPadding={10}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
              <th>Delete Data</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.city}</td>
                <td>
                  {" "}
                  <div className="deleteBtn">
                    {/* <button onClick={() => deleteAdmin(item.index)}>Delete</button> */}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminController;
