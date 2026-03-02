import React, { useState } from "react";

const ToDo = () => {
  const [error, seterror] = useState("");
  const [success, setsuccess] = useState("");
  const [form, setform] = useState({ task: "", date: "", status: "" });

  const API = "http://localhost:4000/userlist/api/v2";

  const handleChange = (e) => {
    const { name, Value } = e.target;
    setform({ ...form, [name]: Value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();

    if (!form.task || !form.date || !form.status) {
      seterror("Add Task Perfectly");
      return;
    }

    try {
      const res = await fetch(`${API}/addTask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setsuccess("Task Added Successfully");
        setform({ task: "", date: "", status: "" });
      }
    } catch (err) {
      seterror(err + "The error from add task");
    }
  };
  return (
    <>
      <form>
        <h2>Todo With Database</h2>
        task{" "}
        <input
          type="text"
          value={form.task}
          onChange={handleChange}
          name="task"
        />
        Date{" "}
        <input
          type="date"
          value={form.date}
          onChange={handleChange}
          name="date"
        />
        Status{" "}
        <select
          name="
        status"
        >
          <option value="Pending">Pending</option>
          <option value="In Progress'">In Progress'</option>
          <option value="Completed">Completed</option>
          <option value="Archived">Archived</option>
        </select>
      </form>
    </>
  );
};

export default ToDo;
