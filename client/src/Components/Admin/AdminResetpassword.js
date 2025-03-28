import React from 'react'
import '../../Assets/Styles/AdminResetpassword.css'

function AdminResetpassword() {
  return (

        <div className="container">
      <div className="card">
        <h2 className="title">Reset Password</h2>
        <form>
          <div className="input-group">
            <label className="label">New Password</label>
            <input type="password" required className="input" />
          </div>
          <div className="input-group">
            <label className="label">Confirm Password</label>
            <input type="password" required className="input" />
          </div>
          <button type="submit" className="button">Reset Password</button>
        </form>
      </div>
    </div>

  )
}

export default AdminResetpassword