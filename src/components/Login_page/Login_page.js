import React, { useState } from 'react';
import './Login_page.css';
import { Link, useNavigate } from "react-router-dom";

const Login_page = () => {


    const navigate = useNavigate();
 const [credential, setcredential] = useState({
   email: "",
   password: "",
 });
 const onchange = (e) => {
   setcredential({ ...credential, [e.target.name]: e.target.value });
 };
    const clickhandler = async () => {
        console.log("first");
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credential),
        });
        console.log("first");
     const json = await response.json();
     console.log(json);
   if (json.success) {
     localStorage.setItem("token", json.authtoken);
     navigate("/");
   }
 };


  return (
    <div id="loginbody">
      <div className="login-page">
        <div className="form">
          <div className="login">
            <div className="login-header">
              <h3>LOGIN</h3>
              <p>Please enter your credentials to login.</p>
            </div>
          </div>
          <form className="login-form">
            <input type="email" placeholder="username" onChange={onchange} />
            <input type="password"  placeholder="password" onChange={onchange} />
            <button onClick={clickhandler}>login</button>
            <p className="message">
              Not registered? <Link to="/signup">Create an account</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login_page