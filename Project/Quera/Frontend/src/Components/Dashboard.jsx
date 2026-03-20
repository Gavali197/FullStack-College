import React, { useEffect, useState } from "react";
import "./style.css"

const Dashboard = () => {
  const [data, setdata] = useState([]);
  const API = "http://localhost:3030/api/v2";

  const getData = async () => {
    try {
      const res = await fetch(`${API}/getblog`);
      const result = await res.json();
      setdata(result);
    } catch (err) {
      console.error(err + "error from get side");
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
    <div className="dashboard">
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
          </div>
        ))}
      </div>
    </div>

    </>
      );
};

export default Dashboard;
