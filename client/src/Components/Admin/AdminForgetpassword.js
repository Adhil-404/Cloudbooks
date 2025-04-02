import React from 'react'
import '../../Assets/Styles/Adminstyles/AdminForgetpassword.css'

function AdminForgetpassword() {
  return (
    <div>
      


    <div className="container">
      <div className="forget-card">
        <h2 className="title">Forgot Password</h2>
        <form>
          <div className="input-group">
            <label className="label">Email Address</label>
            <input
              type="email"
              required
              className="input"
            />
          </div>
          <button type="submit" className="button">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  

    </div>
  )
}

export default AdminForgetpassword