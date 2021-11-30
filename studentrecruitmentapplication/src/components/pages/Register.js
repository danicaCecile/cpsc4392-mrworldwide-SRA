import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import './Register.css';

export default function Register() {

  const [usernameReg, setUsernameReg] = useState("")
  const [passwordReg, setPasswordReg] = useState("")
  const [emailReg, setEmailReg] = useState("")
  const [accessReg, setAccessReg] = useState("")

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  Axios.defaults.withCredentials = true;

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: usernameReg,
      password: passwordReg,
      email: emailReg,
      access: accessReg,
    }).then((response) => {
      console.log(response);
    });
  };

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].username);
      }
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data.user[0].username);
      }
    });
  }, []);

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

      <h1>Log in</h1>
      <form>
        <label>
          <p>Username</p>
          <input type="text"
          onChange={(e) => {
            setUsername(e.target.value)
          }}/>
        </label>
        <label>
          <p>Password</p>
          <input  type="text"
          onChange={(e) => {
            setPassword(e.target.value)
          }}/>
        </label>
        <div>
          <button type="submit" onClick={ login }>Submit</button>
        </div>
      </form>

      <h1>{loginStatus}</h1>
    </div>
  )
}