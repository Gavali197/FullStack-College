import React, { useEffect, useState } from "react";

const Update = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({ name: "", age: "", city: "" });

  // Fetch users
  const getUsers = async () => {
    const res = await fetch("http://localhost:4000/userlist/api/v2/get");
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  // When Edit clicked
  const handleEdit = (user) => {
    setEditingUser(user._id);
    setFormData({ name: user.name, age: user.age, city: user.city });
  };

  // Input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Update API
  const handleUpdate = async () => {
    const res = await fetch(
      `http://localhost:4000/userlist/api/v2/update/${editingUser}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );

    const data = await res.json();

    setUsers((prev) =>
      prev.map((u) => (u._id === editingUser ? data.user : u))
    );

    setEditingUser(null);
    setFormData({ name: "", age: "", city: "" });
  };

  return (
    <div>
      <h2>User List</h2>

      {editingUser && (
        <div style={{ marginBottom: "20px" }}>
          <input name="name" value={formData.name} onChange={handleChange} />
          <input name="age" value={formData.age} onChange={handleChange} />
          <input name="city" value={formData.city} onChange={handleChange} />
          <button onClick={handleUpdate}>Update</button>
          <button onClick={() => setEditingUser(null)}>Cancel</button>
        </div>
      )}

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.city}</td>
              <td>
                <button onClick={() => handleEdit(item)}>EDIT</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Update;
