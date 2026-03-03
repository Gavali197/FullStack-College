import React, { useEffect, useState } from "react";

const ToDo = () => {
  const [error, seterror] = useState("");
  const [success, setsuccess] = useState("");
  // Changed "status" to "Status" to match your Mongoose Schema
  const [form, setform] = useState({ task: "", date: "", Status: "Pending" });
  const [data, setdata] = useState([]);

  const API = "http://localhost:4000/userlist/api/v2";

  const handleChange = (e) => {
    // FIX 1: Use lowercase 'value'
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    seterror(""); // Clear previous errors
    setsuccess("");

    // FIX 2: Check for 'Status' (Uppercase)
    if (!form.task || !form.date || !form.Status) {
      seterror("Please fill in all fields.");
      return;
    }

    try {
      const res = await fetch(`${API}/postTask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setsuccess("Task Added Successfully");
        // Reset form to defaults
        setform({ task: "", date: "", Status: "Pending" });
      } else {
        const errorData = await res.json();
        seterror(errorData.message || "Failed to add task");
      }
    } catch (err) {
      seterror("Server error: " + err.message);
    }
  };

  const GetData = async () => {
    try {
      const res = await fetch(`${API}/findTask`);
      const result = await res.json();
      setdata(result);
    } catch (err) {
      seterror(err + "Error from Finding Data");
    }
  };

  useEffect(() => {
    GetData();
  });

  return (
    <>
      {success && <p style={{ color: "green" }}>{success}</p>}
      <form onSubmit={handleAdd}>
        <h2>Todo With Database</h2>

        <label>Task: </label>
        <input
          type="text"
          value={form.task}
          onChange={handleChange}
          name="task"
        />

        <label> Date: </label>
        <input
          type="date"
          value={form.date}
          onChange={handleChange} // Added missing onChange
          name="date"
        />

        <label> Status: </label>
        <select
          name="Status" // FIX 3: Removed newline and matched Case
          value={form.Status}
          onChange={handleChange}
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
          <option value="Archived">Archived</option>
        </select>

        <button type="submit"> Add Task </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="tableList">
        <table border={1} cellPadding="10">
          <thead>
            <tr>
              <th>Task</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td>{item.task}</td>
                <td>{item.date}</td>
                <td>{item.Status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ToDo;
