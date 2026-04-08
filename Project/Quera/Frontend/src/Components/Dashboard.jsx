import React, { useEffect, useState } from "react";
import "./style.css";
import { useParams, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [data, setdata] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setuser] = useState(null);

  const API = "http://localhost:3030/api/v2";

  const getData = async () => {
    try {
      const res = await fetch(`${API}/getblog`);
      const result = await res.json();
      setdata(result);
    } catch (err) {
      console.error(err + "error from get side");
    }

    // Retrieve session data
  const userHandler =()=>{
   JSON.parse(sessionStorage.getItem("user"));
  }  
  };

  // const handleBlogPostclick = async (id) => {
  //  navigate(`/blogs/${id}`)
  // };

  const handleLogout = ()=>{
    localStorage.removeItem("user");
    setuser(null);
    navigate("/");
  }

  useEffect(() => {
    getData();

    const storedData = localStorage.getItem("user");
    if(storedData){
      setuser(JSON.parse(storedData));
    }
  }, []);
  return (
    <>
      <div className="dashboard">
        <div className="navbar">
          <ul>
           <button onClick={()=> navigate("/blogPost")}>Post Blog</button>
            
            {user ? (
              <>
                <span>Welcome, {user.name}</span>
                <button onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <button onClick={() => navigate("/login")}>Login</button>
            )}
          </ul>
        </div>
        <h1 className="heading">Heading Page Of new Blog Posted Here</h1>
        <div className="blog-container">
          {data.map((item, index) => (
            <div className="blog" key={index}>
              <h3>{item.heading}</h3>
              <p>{item.description}</p>
              <p>
                <i>
                  <b>{item.author}</b>
                </i>
              </p>

              <button onClick={()=> navigate(`/blogs/${item._id}`)}>Show Blog</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
