import React, { useEffect, useState } from "react";

const AdminController = () => {
  const [form, setForm] = useState({ name: "", age: "", city: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [data, setData] = useState([]);
  const [editingUser, setEditingUser] = useState(null); // Stores the ID of user being edited

  const API = "http://localhost:4000/userlist/api/v2";

  // Fetches all admins
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  /*
  ! Fill form with existing data to Edit
  */
  const handlerEdit = (user) => {
    setEditingUser(user._id);
    setForm({ name: user.name, age: user.age, city: user.city });
    setError("");
    setSuccess("");
  };
 

  
  /*
  ! Handle Update (PUT Request)
  */
  const handleUpdate = async (e) => {
    e.preventDefault(); // Prevent page reload
    try {
      const res = await fetch(`${API}/UpdateAdmin/${editingUser}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await res.json();

      if (res.ok) {
        setSuccess("User updated successfully ✅");
        setEditingUser(null);
        setForm({ name: "", age: "", city: "" });
        getData(); // Refresh list from DB
      } else {
        setError(result.message || "Update failed");
      }
    } catch (err) {
      setError("Server error during update");
    }
  };

  /*
  ! Handle Insert (POST Request)
  */
  const insertHandle = async (e) => {
    e.preventDefault();
    if (!form.name || !form.age || !form.city) {
      setError("Please fill all fields");
      return;
    }

    try {
      const res = await fetch(`${API}/postAdmin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess("Data inserted successfully ✅");
        setForm({ name: "", age: "", city: "" });
        getData();
      }
    } catch (err) {
      setError("Server not reachable");
    }
  };

  const deleteAdmin = async (id) => {
    if (!window.confirm("Delete this user?")) return;
    try {
      const res = await fetch(`${API}/deleteAdmin/${id}`, { method: "DELETE" });
      if (res.ok) {
        setData((prev) => prev.filter((u) => u._id !== id));
      }
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  return (
    <>
      {/* Dynamic Form: Title and Submit Handler change based on editingUser state */}
      <form onSubmit={editingUser ? handleUpdate : insertHandle}>
        <h2>{editingUser ? "Update Admin" : "Insert Admin"}</h2>

        {success && <p style={{ color: "green" }}>{success}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        <div>Name: <input type="text" name="name" value={form.name} onChange={handleChange} /></div>
        <div>Age: <input type="number" name="age" value={form.age} onChange={handleChange} /></div>
        <div>City: <input type="text" name="city" value={form.city} onChange={handleChange} /></div>

        <button type="submit">{editingUser ? "Save Changes" : "Insert Data"}</button>
        
        {editingUser && (
          <button type="button" onClick={() => { setEditingUser(null); setForm({ name: "", age: "", city: "" }); }}>
            Cancel
          </button>
        )}
      </form>

      <div className="userlist">
        <h2>User List</h2>
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Name</th><th>Age</th><th>City</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.city}</td>
                <td>
                  <button onClick={() => handlerEdit(item)}>Edit</button>
                  <button onClick={() => deleteAdmin(item._id)}>Delete</button>
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