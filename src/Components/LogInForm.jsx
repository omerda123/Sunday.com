import React from 'react'

export default function LogInForm(props) {
    return (
        <div className="log-in-form">
            <div className="login-container">
                <div className="login-logo">
                    <img src="http://s3.amazonaws.com/general-assets/monday-200x200.png" alt="Logo" />
                </div>

                <div className="login-form">

                    User name <input type="text" name="userName" id="userName" onBlur={(e) => props.handleChange(e, "userName")} />
                    Password  <input type="password" name="password" id="password" onBlur={(e) => props.handleChange(e, "password")} />
                    {
                        (props.retries === 0)?
                        null:
                        <button className="login-button" onClick={() => props.validateUser()}> Log in</button>
                        
                    }
                    <a href="google.com">Forgot your password?</a>

                </div>
            </div>
            <div className="login-error">
                {(props.retries < 3 && props.retries > 0) ?
                    <p>Login failed you have more {props.retries} retries</p> : null
                }
                {
                    (props.retries === 0) ?
                        <p>User locked</p> : null
                }
                {
                    (props.userFound)? 
                    null:
                    <p> user not found</p>
                }
            </div>

        </div>
    )
}
