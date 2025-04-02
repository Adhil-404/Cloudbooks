import React, { useState } from 'react'
import '../../Assets/Styles/Adminstyles/AdminRegistration.css'

function AdminRegistration() {
  const [adminData, setadminData] = useState({
    FullName: '',
    Email: '',
    Password: '',
    ConfirmPassword: ''
  });

  const adminChange = (e) => {
    setadminData({ ...adminData, [e.target.name]: e.target.value });
  };

  const adminSubmit = (e) => {
    e.preventDefault();

    if (adminData.Password !== adminData.ConfirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    
    console.log('Form submitted:', adminData);
  };
  return (
    <div>
       <div className="signup-container">
      <div className="signup-card">
        <h2>Admin Registration</h2>
        <form onSubmit={adminSubmit}>
          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              name="FullName"
              placeholder="Enter your full name"
              value={adminData.FullName}
              onChange={adminChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="Email"
              placeholder="you@example.com"
              value={adminData.Email}
              onChange={adminChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="Password"
              placeholder="••••••••"
              value={adminData.Password}
              onChange={adminChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="ConfirmPassword"
              placeholder="••••••••"
              value={adminData.ConfirmPassword}
              onChange={adminChange}
              required
            />
          </div>

          <button type="submit" className="btn">Sign Up</button>

          <p className="login-link">
            Already have an account? <a href="#">Login here</a>
          </p>
        </form>
      </div>
    </div>
  
    </div>
  )
}

export default AdminRegistration