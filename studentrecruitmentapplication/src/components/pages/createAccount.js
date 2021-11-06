import React from 'react';
import './createAccount.css';

export default function createAccount() {
  return(
    <div className="login-wrapper">
      <h1>Create an account!</h1>
      <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}