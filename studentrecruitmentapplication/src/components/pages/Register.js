import React, { useState } from 'react';
import Axios from 'axios'
import './Register.css';

export default function Register() {

  const [usernameReg, setUsernameReg] = useState("")
  const [passwordReg, setPasswordReg] = useState("")

  const register = () => {
    Axios.post('http://localhost:3001/register', {
    username: usernameReg, password: passwordReg,}).then((response) => 
    { console.log(response); });
  }

  return(
    <div className="login-wrapper">
      <h1>Create an account!</h1>
      <form>
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => {
            setUsernameReg(e.target.value);
          }}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={(e) => {
            setPasswordReg(e.target.value);
          }}/>
        </label>
        <div>
          <button type="submit" onClick={register}>Submit</button>
        </div>
      </form>
    </div>
  )
}