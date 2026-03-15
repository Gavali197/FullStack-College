import React, { useEffect, useState } from "react";

const BookShelf = () => {
  const [form, setForm] = useState({
    book: "",
    author: "",
    price: "",
    rating: "",
    createdAt: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [data, setData] = useState([]);
  const [editingId, setEditingId] = useState(null); // ✅ track which book is being edited

  const API = "http://localhost:4000/userlist/api/v2";

  // ✅ Add Book
  const handleBook = async (e) => {
    e.preventDefault();

    if (!form.book || !form.author || !form.price || !form.rating || !form.createdAt) {
      setError("Fill All information");
      return;
    }

    // If editing → update instead of add
    if (editingId) {
      handleUpdate();
      return;
    }

    try {
      const res = await fetch(`${API}/postbook`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        const newBook = await res.json();
        setData((prev) => [...prev, newBook]);
        setSuccess("Book Added");
        setError("");
        setForm({ book: "", author: "", price: "", rating: "", createdAt: "" });
      } else {
        const errorData = await res.json();
        setError(errorData.message || "Failed To add book");
      }
    } catch (err) {
      setError("Server Error : " + err);
    }
  };

  // ✅ Input Change
  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // ✅ Get Books
  const getData = async () => {
    try {
      const res = await fetch(`${API}/getBook`);
      const result = await res.json();
      setData(result);
    } catch (err) {
      setError("Error From Get Data " + err);
    }
  };

  // ✅ Delete Book
  const DeleteTask = async (id) => {
    try {
      await fetch(`${API}/deletebook/${id}`, { method: "DELETE" });
      setData((prevBooks) => prevBooks.filter((u) => u._id !== id));
    } catch (err) {
      console.log(err + " Issue In Delete");
    }
  };

  // ✅ Pre-fill form for editing
  const editBook = (book) => {
    setForm({
      book: book.book,
      author: book.author,
      price: book.price,
      rating: book.rating,
      createdAt: book.createdAt,
    });
    setEditingId(book._id);
  };

  // ✅ Update Book
  const handleUpdate = async () => {
    try {
      const res = await fetch(`${API}/updatebook/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        const updatedBook = await res.json();
        setData((prev) =>
          prev.map((b) => (b._id === editingId ? updatedBook : b))
        );
        setSuccess("Book Updated");
        setEditingId(null);
        setForm({ book: "", author: "", price: "", rating: "", createdAt: "" });
      }
    } catch (err) {
      setError("Update failed: " + err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {success && <p style={{ color: "green" }}>{success}</p>}
      <form onSubmit={handleBook}>
        <h1>Book Shelf</h1>
        book:{" "}
        <input type="text" value={form.book} onChange={onChange} name="book" />
        author:{" "}
        <input type="text" value={form.author} onChange={onChange} name="author" />
        price:{" "}
        <input type="text" value={form.price} onChange={onChange} name="price" />
        rating:{" "}
        <input type="text" value={form.rating} onChange={onChange} name="rating" />
        CreatedAt:{" "}
        <input type="date" value={form.createdAt} onChange={onChange} name="createdAt" />
        
        {/* Switch button depending on mode */}
        <button type="submit">
          {editingId ? "Update Book" : "Add In Book Shelf"}
        </button>

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
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td>{item.book}</td>
                <td>{item.author}</td>
                <td>{item.price}</td>
                <td>
                  {Array.from({ length: Number(item.rating) }).map((_, index) => (
                    <span key={index}>⭐</span>
                  ))}
                </td>
                <td>{item.createdAt}</td>
                <td>
                  <button onClick={() => DeleteTask(item._id)}>Delete</button>
                </td>
                <td>
                  <button onClick={() => editBook(item)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BookShelf;