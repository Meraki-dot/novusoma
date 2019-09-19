import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Navbar.css';

const NavBar = () => {

    const initialUsers = [
        {
            username: 'user',
            password: '123'
        }
    ];

    const [users] = useState(initialUsers);

    const log = (username, password) => {
        let validUser =
            users.filter(
                user => user.password === password
                    && user.username === username
            );

        return validUser.length > 0;
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginAttempted, setLoginAttempted] = useState(false);
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [signUpAttempted, setSignUpAttempted] = useState(false);

    const buttonClicked = () => {
        setLoginAttempted(true);
        setLoginSuccess(log(username, password));
    }

    const signUpClick = () => {
        setSignUpAttempted(true);
    }

    return signUpAttempted ? <Redirect to="/signup" /> : loginAttempted ? loginSuccess ? <Redirect to="/dashboard" /> : <Redirect to="/reject" />
        : (
            <nav id="navbarLogin" class="navbar navbar-expand-md navbar-light bg-light">
                <a id="brand" class="navbar-brand"><img id="navbarLogo" src="./images/rfa_logo.png" /></a>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ml-auto">
                        <a class="nav-link dropdown-toggle" data-toggle="dropdown">Login</a>
                        <div id="dropDownMenu" class="dropdown-menu drop-right">
                            <div class="form-group">
                                <h5>Username</h5><input id="dropUsername" value={username} onChange={e => setUsername(e.target.value)} type="text" class="form-control" required="required" />
                            </div>
                            <div class="form-group">
                                <h5>Password</h5><input id="dropPassword" value={password} onChange={e => setPassword(e.target.value)} type="password" class="form-control" required="required" />
                            </div>
                            <input id="dropSubmit" type="submit" class="btn btn-primary btn-block" onClick={buttonClicked} value="Login" />
                            <div class="form-footer">
                                <a id="dropSignUp">Not a member? <button id="dropSignUpButton" onClick={() => signUpClick()}>Sign Up!</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
}
export default NavBar;