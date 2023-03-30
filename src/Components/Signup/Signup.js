import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [credential, setcredential] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
  });
  const onchange = (e) => {
    setcredential({ ...credential, [e.target.name]: e.target.value });
  };

  const clickhandler = async () => {
    console.log("first");
    console.log(credential);
    const response = await fetch(`http://localhost:5000/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credential),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      console.log(json);
      navigate("/login");
    }
  };

  return (
    <div id="signupbody">
      <div className="container">
        <form>
          <h2 className="signUpHead">Sign Up</ h2>
          <label htmlFor="name">Enter your name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={onchange}
          />
          <label htmlFor="number">Phone:</label>
          <input
            type="number"
            id="number"
            name="number"
            required
            onChange={onchange}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={onchange}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            onChange={onchange}
          />
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            name="confirmpassword"
            required
            onChange={onchange}
          />
          <input
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              clickhandler();
            }}
            value="SignUp"
          />
        </form>
      </div>
    </div>
  );
};
export default Signup;
