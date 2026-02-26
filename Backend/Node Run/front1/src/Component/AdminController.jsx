import React, { useEffect, useState } from "react";

const AdminController = () => {
  const [form, setForm] = useState({ name: "", age: "", city: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [data, setData] = useState([]);

  const API = "http://localhost:4000/userlist/api/v2";
/*
! Insert Data From User
*/
  const insertHandle = async (e) => {
    e.preventDefault();

    // validation
    if (!form.name || !form.age || !form.city) {
      setError("Please fill all fields");
      return;
    }

    // duplicate check
    const isDuplicate = data.find(
      (user) =>
        user.name.toLowerCase() === form.name.toLowerCase() &&
        user.age === form.age &&
        user.city.toLowerCase() === form.city.toLowerCase()
    );

    if (isDuplicate) {
      setError("User already registered");
      setSuccess("");
      return;
    }

    try {
      const res = await fetch(`${API}/postAdmin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await res.json();

      if (res.ok) {
        setSuccess("Data inserted successfully ✅");
        setError("");
        setForm({ name: "", age: "", city: "" });
        getData(); // refresh list
      } else {
        setError(result.message || "Insert failed");
      }
    } catch (err) {
      console.error(err);
      setError("Server not reachable");
    }
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  /*
  ! Get User Request
  */
  const getData = async () => {
    try {
      const res = await fetch(`${API}/getAdmin`);
      const result = await res.json();
      setData(result);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

 /*
 ! Delete With Data Base Integration
 */
  const deleteAdmin = async (id) => {
    const confirmDelete = window.confirm("Delete this user?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`${API}/deleteAdmin/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setData((prev) => prev.filter((u) => u._id !== id));
      }
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  return (
    <>
     
      <form onSubmit={insertHandle}>
        <h2>Insert Admin</h2>

        {success && <p style={{ color: "green" }}>{success}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        <div>
          Name:
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div>
          Age:
          <input
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
          />
        </div>

        <div>
          City:
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Insert Data</button>
      </form>


      <div className="userlist">
        <h2>User List</h2>

        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan="4">No users found</td>
              </tr>
            ) : (
              data.map((item) => (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.city}</td>
                  <td>
                    <button onClick={() => deleteAdmin(item._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminController;