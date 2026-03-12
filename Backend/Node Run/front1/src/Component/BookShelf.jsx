import React, { useEffect } from "react";
import { useState } from "react";

const BookShelf = () => {
  const [form, setform] = useState({
    book: "",
    author: "",
    price: "",
    rating: "",
    createdAt: "",
  });
  const [error, seterror] = useState("");
  const [success, setsuccess] = useState("");
  const [data, setdata] = useState([]);

  const [num, setnum] = useState([]);

  const AddArray = () => {
    setnum+1
    Array(setnum.length).push()
  }

  const API = "http://localhost:4000/userlist/api/v2";

  const handleBook = async (e) => {
    e.preventDefault();

    if (
      !form.book ||
      !form.author ||
      !form.price ||
      !form.rating ||
      !form.createdAt
    ) {
      seterror("Fill All information");
      return;
    }

    try {
      const res = await fetch(`${API}/postbook`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setsuccess("Book Added");
      } else {
        const errorData = await res.json();
        seterror(errorData.message || "Failed To added book");
      }
    } catch (err) {
      seterror("server Error : " + err);
    }
  };

  const onchange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

  const getData = async() => {
    try{
    const res = await fetch(`${API}/getBook`)
    const result = await res.json();
    setdata(result);
    }catch(err){
      seterror("Error From Get Data" + err);
    }
  }

  useEffect(()=>{
    getData();
  }, []);
  return (
    <>
      {success && <p style={{ color: "green" }}>{success}</p>}
      <form onSubmit={handleBook}>
        <h1>Book Added Shelf</h1>
        book :{" "}
        <input type="text" value={form.book} onChange={onchange} name="book" />
        author :{" "}
        <input
          type="text"
          value={form.author}
          onChange={onchange}
          name="author"
        />
        price :{" "}
        <input
          type="text"
          value={form.price}
          onChange={onchange}
          name="price"
        />
        rating :{" "}
        <input
          type="text"
          value={form.rating}
          onChange={onchange}
          name="rating"
        />
        CreatedAt :{" "}
        <input
          type="date"
          value={form.createdAt}
          onChange={onchange}
          name="createdAt"
        />
        <button type="submit">Add In Book Shelf</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
      <hr />
      <div className="tableList">
        <table cellPadding="10" border={1}>
          <thead>
            <tr>
              <th>Book Name</th>
              <th>Author</th>
              <th>Price</th>
              <th>Rating</th>
              <th>CreatedAt</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td>{item.book}</td>
                <td>{item.author}</td>
                <td>{item.price}</td>
               <td>
                {Array.from({length : Number(item.rating) }).map((_, index)=>(
                  <span key={index}>⭐</span>
                ))}
               </td>
                <td>{item.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    <p>{num}</p>
    <button onClick={AddArray}>Add Array</button>
    </>
  );
};

export default BookShelf;
