import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dashbaord = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");    
    }
  return (
    <div>Dashbaord</div>
  )
}

export default Dashbaord