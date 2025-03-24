import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';

const Home = () => {

  const [loggedInUser, setloggedInUser] = useState('');

  const navigate = useNavigate();

  useEffect(()=>{
    setloggedInUser(localStorage.getItem('loggedInUser'))
  }, []);

  const handleLogout = (e)=> {
    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('token');
    handleSuccess('User Loggedout!');
    setTimeout(()=>{
      navigate('/login');
    }, 1000)
  }



  return (
    <div>
      <h1>{loggedInUser}</h1>
      <button onClick={handleLogout}>Logout</button>

      <ToastContainer/>
    </div>
  )
}

export default Home