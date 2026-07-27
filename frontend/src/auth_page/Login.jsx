import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";



function Login() {
  const navigate = useNavigate();  
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
  });

  const { username, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
        ...inputValue,
        [name]: value,
    })
  }


  const handleError = (err) => {
    toast.error(err, {
      position: "bottom-left",
    });
  };

  const handleSuccess = (msg) => {
    toast.success(msg, {
        position: "bottom-right",
    })
  }

  const handleOnSubmit = async (e) => {
    try {
        e.preventDefault();
    const { data} = await axios.post("http://localhost:3000/login", {
        ...inputValue
    }, {
        withCredentials: true
    });

    const { success, message } = data;
    if(success) {
        handleSuccess(message);
        setTimeout(() => {
            window.location.href = "http://localhost:5174";
        }, 1000);
    } else {
        handleError(message);
    }
    } catch (err) {
        console.log(err);
    }

    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  }

  return( 
    <div className="form_container">
        <h2>Login Now</h2>
        <form onSubmit={handleOnSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" value={username} placeholder="Enter your username" onChange={handleOnChange}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={password} placeholder="Enter your password" onChange={handleOnChange}/>
            </div>
            <button type="submit">Submit</button>
            <span>
                Create an account? <Link to={"/signup"} className="auth-link">Signup</Link>
            </span>
        </form>
        <ToastContainer />
    </div>
    );
}

export default Login;
