import React, { useState } from 'react'
import './LoginSignup.css'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import person_icon from '../Assets/person.png'
const LoginSignup = () => {
     
 const [action,setAction] = useState(" Sign up");

    return (
        <div className='container'>
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === "Login" ? null : (
            <div className="input">
              <img src={person_icon} alt="" />
              <input type="text" placeholder='username' />
            </div>
          )}
  
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder='email' />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder='password' />
          </div>
        </div>
        {action === "Sign up" ? null : (
          <div className="forgetpassword">lost password ? <span>click here plz</span></div>
        )}
        <div className="submit-container">
          <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => setAction("Sign up")}>Sign up</div>
          <div className={action === "Sign up" ? "submit gray" : "submit"} onClick={() => setAction("Login")}>Login</div>
        </div>
      </div>
    )
}
export default LoginSignup;