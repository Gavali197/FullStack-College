import React from "react";
import { useState } from "react";

const Insert = () => {
  const [form, setform] = useState({ name: "", age: "", city: "" });
  const [error, seterror] = useState("");
  const handleInsert = (e) => {
    e.preventDefault();

    if (!form.name || !form.age || !form.city) {
      seterror("Fill all the filed");
    } else if (form.name.length < 4) {
      seterror("Name are too smalled");
    } else {
      seterror("");
      alert("insert data successfully");
    }

    console.log(form);
    
  };

  const onchange = (e) => {
      const { name, value } = e.target;
      setform({ ...form, [name]: value });
    };
  return (
    <div>
      <form onSubmit={handleInsert}>
        Name{" "}
        <input type="text" value={form.name} onChange={onchange} name="name" />
        Age{" "}
        <input
          type="text"
          value={form.age}
          onChange={onchange}
          name="age"
        />{" "}
        city{" "}
        <input type="text" value={form.city} onChange={onchange} name="city" />
        <button type="submit">insert data</button>
        <br /><br />
        {error && <p style={{color:"red"}}>{error}</p>}
      </form>
    </div>
  );
};

export default Insert;
