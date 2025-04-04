import React from 'react'
import '../../Assets/Styles/Adminstyles/AdminLogin.css'
import { useNavigate } from 'react-router-dom';




function AdminLogin() {



  return (
    <div class="container">
      <div class="login-card">
        <div class="left_container">
          <div class="logo">

          </div>
          <h2>Welcome to</h2>
          <h1>CloudBooks</h1>
          <p>
            Manage your bookstore efficiently with CloudBooks. Add books,
            process orders, and keep track of your inventory seamlessly.
          </p>
        </div>
        <div class="right_container">
          <h2>Admin Login</h2>
          <form>
            <div class="input-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div class="input-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" class="btn">Sign In</button>

          </form>

        </div>
      </div>
    </div>
  );
}


export default AdminLogin;