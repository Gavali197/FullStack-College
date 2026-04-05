import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Blogs = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  const navigate = useNavigate();

  const API = "http://localhost:3030/api/v2/getblog";

  const getBlog = async () => {
    try {
      const res = await fetch(`${API}/${id}`);
      const result = await res.json();
      setData(result);
    } catch (err) {
      console.error("Error fetching blog:", err);
    }
  };

  useEffect(() => {
    getBlog();
  }, [id]);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="blogpost">
      <h1>{data.heading}</h1>
      <h4>{data.description}</h4>
      <h5>
        <a href="/userpage">
        <i><b>@{data.author}</b></i>
        </a>
      </h5>
    </div>
  );
};

export default Blogs;
