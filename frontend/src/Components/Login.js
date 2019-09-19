import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import './css/Login.css'

const Login = () => {
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

    const buttonClicked = () => {
        setLoginAttempted(true);
        setLoginSuccess(log(username, password));
    }

    return loginAttempted ? loginSuccess ? <Redirect to="/dashboard" /> : <Redirect to="/reject-page" />
        : (
            <div>
                <div><Link className="NavItem2" to="/"><img id="signUpLogo" src="./images/rfa_logo.png" /></Link></div>
                <MDBContainer id="loginContainer">
                    <MDBRow>
                        <MDBCol md="6">
                            <MDBCard id="loginCard">
                                <MDBCardBody className="mx-4">
                                    <div className="text-center">
                                        <h3 className="dark-grey-text mb-5">
                                            <strong>Sign in</strong>
                                        </h3>
                                        <br>
                                        </br>
                                    </div>
                                    <p>Username</p>
                                    <MDBInput value={username} onChange={e => setUsername(e.target.value)}
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />
                                    <p>Password</p>
                                    <MDBInput value={password} onChange={e => setPassword(e.target.value)}
                                        group
                                        type="password"
                                        validate
                                        containerClass="mb-0"
                                    />
                                    <br></br>
                                    <button id="signInButton" onClick={buttonClicked}>
                                        Sign in
                            </button>
                                </MDBCardBody>
                                <MDBModalFooter className="mx-5 pt-3 mb-1">
                                    <p className="font-small grey-text d-flex justify-content-end">
                                        Not a member?
                <a href="#!" className="blue-text ml-1">

                                            Sign Up
                </a>
                                    </p>
                                </MDBModalFooter>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        );
};

export default Login;