import { message } from 'antd';
import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Navbar() {

  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      const response = await axios.get("/api/users/logout")
      if (response.data.success) {
        message.success(response.data.message);
        localStorage.removeItem('token');
        navigate("/login")
      }
    } catch (error) {
      message.error(error.message)
    }
  }

  return (
    <div>
      <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
        <div className="container">
          <h4 to="/" className="navbar-brand">Contact <span className='text-warning'>Application</span></h4>
          <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
