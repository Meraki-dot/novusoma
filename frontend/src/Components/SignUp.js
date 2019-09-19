import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import './css/SignUp.css'

const SignUp = () => {

    const [signUpAttempted, setSignUpAttempted] = useState(false);
    const [signUpSuccess, setSignUpSuccess] = useState(false);

    return (
        <div id="registerPageContainer">
            <div><Link className="NavItem2" to="/"><img id="signUpLogo" src="./images/rfa_logo.png" /></Link></div>
            <div id="signUpContainer">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6">
                            <MDBCard id="signUpCard">
                                <MDBCardBody>
                                    <form>
                                        <p className="h4 text-center py-4"><h1>Sign up</h1></p>
                                        <div className="grey-text">
                                            <p>Your Name</p>
                                            <MDBInput
                                                icon="user"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                            />
                                            <p>Your Email</p>
                                            <MDBInput
                                                icon="envelope"
                                                group
                                                type="email"
                                                validate
                                                error="wrong"
                                                success="right"
                                            />
                                            <p>Confirm Your Email</p>
                                            <MDBInput
                                                icon="envelope"
                                                group
                                                type="email"
                                                validate
                                                error="wrong"
                                                success="right"
                                            />
                                            <p>Your Password</p>
                                            <MDBInput
                                                icon="exclamation-triangle"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                            />
                                            <p>Confirm Password</p>
                                            <MDBInput
                                                icon="lock"
                                                group
                                                type="password"
                                                validate
                                            />
                                        </div>
                                    </form>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
            <div id="infoContainer">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6">
                            <MDBCard id="infoCard">
                                <MDBCardBody>
                                    <form>
                                        <p className="h4 text-center py-4"><h1>Your Information</h1></p>
                                        <div className="grey-text">
                                            <p className="infoTitle" id="usernameTitle">Username</p>
                                            <input className="info" id="usernameBox" type="text" />
                                            <p className="infoTitle" id="ageTitle">Age</p>
                                                <input className="info" id="ageBox" type="text" />
                                            <p className="infoTitle" id="genderTitle">Gender</p>
                                                <input className="info" id="genderBox" type="text" />
                                            <p className="infoTitle" id="heightTitle">Height</p>
                                                <input className="info" id="heightBox" type="text" />
                                            <p className="infoTitle" id="weightTitle">Weight</p>
                                                <input className="info" id="weightBox" type="text" />
                                            <p className="infoTitle" id="birthdayTitle">Birthday</p>
                                            <input className="info" id="birthdayBox" placeholder="mm/dd/yyyy" type="text" />
                                            <div className="text-center py-4 mt-3">
                                                <button id="registerButton" type="submit"><Link to="/login">
                                                    Register </Link>
                                        </button>
                                            </div>
                                        </div>
                                    </form>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        </div>
    );
};

export default SignUp;