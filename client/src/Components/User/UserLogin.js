import React, { useState } from 'react'
import '../../Assets/Styles/UserLogin.css'

function UserLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);


  const handleSubmit=(e)=>{
    e.preventDefault();
  }

  return (
    <div className="container">
      <div className="login-card">
        <div className="left_container">
          <div className="logo">
            <img src='logo.png' />
          </div>
          <h2>Welcome to</h2>
          <h1>CloudBooks</h1>
          <p>
            Manage your bookstore efficiently with CloudBooks. Add books,
            process orders, and keep track of your inventory seamlessly.
          </p>
        </div>
        <div className="right_container">
         
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
              />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                autoComplete='password'
                required
              />
            </div>
            <div className="options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit" className="btn">Sign In</button>
            <div className="signup">
              <p>Don't have an account? <a href="#" className="sign-link">Sign up</a></p>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default UserLogin