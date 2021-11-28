import "./register.css"
import { Link } from "react-router-dom"
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { addUser } from "../../service/api";
import { setCurrUser } from "../../App";
import { currentUser } from "../../App";

const initialValue = {
  username: "",
  email: "",
  password:""
}



export default function Register() {


  const [user, setUser] = useState(initialValue);
  const {username,email,password} = user;
  let history = useHistory();

  const onValueChange = (e) => {
    // console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const addUserDetails = async () => {
    await addUser(user);
    history.push('./users');
    //props.user=true;
    setCurrUser(currentUser);
    alert(currentUser);
  }

    return (
        <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input 
        onChange={(e) => onValueChange(e)} name='username' value={username}
        className="registerInput" type="text" placeholder="Enter your username..." />
        <label>Email</label>
        <input 
        onChange={(e) => onValueChange(e)} name='email' value={email}
        className="registerInput" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input 
        onChange={(e) => onValueChange(e)} name='password' value={password}
        className="registerInput" type="password" placeholder="Enter your password..." />
        <button className="registerButton" onClick={addUserDetails}>
          Register
        </button>
      </form>
        <button className="registerLoginButton">
        <Link className="link-reg-log" to="/login">
        Login
        </Link>
        </button>
    </div>
    )
}
