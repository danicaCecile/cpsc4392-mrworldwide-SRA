import React, { useState } from 'react';
import Axios from 'axios'
import './Register.css';

export default function Register() {

  const [usernameReg, setUsernameReg] = useState("")
  const [passwordReg, setPasswordReg] = useState("")
  const [emailReg, setEmailReg] = useState("")
  const [accessReg, setAccessReg] = useState("")

  Axios.defaults.withCredentials = true;

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: usernameReg,
      password: passwordReg,
      email: emailReg,
      access: accessReg
    }).then((response) => {
      console.log(response);
    });
  };

  return(
    <div className="login-wrapper">
      <h1>Create an account!</h1>
      <form>
        <label>
          <p>Username</p>
          <input type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value)
          }}/>
        </label>
        <label>
          <p>Password</p>
          <input  type="text"
          onChange={(e) => {
            setPasswordReg(e.target.value)
          }}/>
        </label>
        <label>
          <p>Email</p>
          <input  type="text"
          onChange={(e) => {
            setEmailReg(e.target.value)
          }}/>
        </label>
        <label>
          <p>Access Level</p>
          <input  type="text"
          onChange={(e) => {
            setAccessReg(e.target.value)
          }}/>
        </label>
        <div>
          <button type="submit" onClick={ register }>Submit</button>
        </div>
      </form>
    </div>
  )
}