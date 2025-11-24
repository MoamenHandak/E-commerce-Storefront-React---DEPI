import React from 'react'
import './CSS/LoginSignup.css'
function LoginSignup() {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Your Email' />
          <input type="password" placeholder='Your Password' />
        </div>
        <button>Containue</button>
        <p className="loginsignup-login">Already have an account? <span>Login</span></p>
        <div className="loginsingup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, you agree to Shopper's Terms of Use and Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup