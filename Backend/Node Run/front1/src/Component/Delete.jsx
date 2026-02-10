import { useEffect, useState } from "react";

const Delete = () => {
  const [user, setUser] = useState([]);

  // Fetch all users
  const getUsers = async () => {
    try {
      const res = await fetch("http://localhost:4000/userlist/api/v2/get");
      const result = await res.json();
      setUser(result);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  // Delete user
  const deleteUsers = async (id) => {
    try {
      await fetch(`http://localhost:4000/userlist/api/v2/delete/${id}`, {
        method: "DELETE",
      });

      // Remove deleted user from UI without refresh
      setUser((prevUsers) => prevUsers.filter((u) => u._id !== id));
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  return (
    <>
      <h2>User List</h2>
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
          {user.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.city}</td>
              <td>
                <button onClick={() => deleteUsers(item._id)}>DELETE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Delete;
