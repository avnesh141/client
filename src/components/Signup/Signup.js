import React from 'react';
import './Signup.css'
function Signup() {
    return (
        <body id='signupbody'>
            <div className="container">
                <form>
                    <h2>Sign Up</h2>
                    <label htmlFor="name">Enter your name:</label>
                    <input type="text" id="name" name="name" required />
                    <label htmlFor="number">Phone:</label>
                    <input type="number" id="number" name="number" required />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input type="password" id="confirm-password" name="confirm-password" required />
                    <input type="submit" value="Sign Up" />
                </form>
            </div>
        </body>
    );
}
export default Signup;
