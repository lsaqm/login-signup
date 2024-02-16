import React, { useState } from 'react';
import './LoginSignup.css';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import person_icon from '../Assets/person.png';

const LoginSignup = () => {
    const [action, setAction] = useState("Sign up");
    const [username, setUsername] = useState('');

    const handleActionChange = (newAction) => {
        setAction(newAction);
        // Clear username input when switching between "Sign up" and "Login"
        setUsername('');
    };

    const handleSubmit = () => {
        if (action === 'Sign up') {
            // Handle sign up logic here
            console.log('Signing up...');
        } else {
            // Handle login logic here
            console.log('Logging in...');
        }
    };

    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            {action === "Sign up" && (
                <div className="input">
                    <img src={person_icon} alt="" />
                    <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
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
            {action === "Sign up" ? null : (
                <div className="forgetpassword">lost password ? <span>click here </span></div>
            )}
            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => handleActionChange("Sign up")}>Sign up</div>
                <div className={action === "Sign up" ? "submit gray" : "submit"} onClick={() => handleActionChange("Login")}>Login</div>
            </div>
            <button className='button-submit' onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default LoginSignup;
