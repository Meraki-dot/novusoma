import React from 'react';
import { Parallax } from "react-parallax";
import { Link } from 'react-router-dom';
import './css/SplashPage.css'
import Navbar from './Navbar';

const insideStyles = {
    background: "transparent",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
};
const image1 =
    "https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";
const image2 =
    "https://images.unsplash.com/photo-1427384906349-30452365b5e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80";
const image3 =
    "https://images.unsplash.com/photo-1526305030242-999e70a96e1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";
const image4 =
    "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80";
const image5 =
    "https://images.unsplash.com/flagged/photo-1556746834-cbb4a38ee593?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80";
const image6=
    "https://images.unsplash.com/photo-1508558936510-0af1e3cccbab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";

const SplashPage = () => {
    return (
    <div id="pageContainer">
        <div >
            <Navbar />
            <div id="mainImgContainer">
                <Parallax bgImage={image1} strength={500}>
                    <div style={{ height: 990 }}></div>
                </Parallax>
            </div>
            <div id="opaqueSquare"></div>
            <div>
                <img id="logo" src="./images/rfa_logo.png" />
            </div>
            <div className="imgRight">
                <Parallax bgImage={image2} strength={500}>
                    <div style={{ height: 990, marginLeft: 700 }}></div>
                </Parallax>
            </div>
            <div className="contentLeft" id="about">
                <h1 className="contentTitleLeft" >ABOUT US</h1>
                <h3 className="contentLeft">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate magni veritatis doloribus maxime, quo corporis placeat? Architecto, quos assumenda. Architecto non autem et iste quod libero alias nesciunt deserunt! Sapiente.</h3>
            </div>
            <div className="imgLeft">
                <Parallax bgImage={image3} strength={500}>
                    <div style={{ height: 990 }}>
                    </div>
                </Parallax>
            </div>
            <div className="contentRight" id="feature1">
                <h1 className="contentTitleRight" >FEATURE</h1>
                <h3 className="contentRight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate magni veritatis doloribus maxime, quo corporis placeat? Architecto, quos assumenda. Architecto non autem et iste quod libero alias nesciunt deserunt! Sapiente.</h3>
            </div>
            <div className="imgRight">
                <Parallax bgImage={image4} strength={500}>
                    <div style={{ height: 990, marginLeft: 700 }}>
                    </div>
                </Parallax>
            </div>
            <div className="contentLeft" id="feature2">
                <h1 className="contentTitleLeft" >FEATURE</h1>
                <h3 className="contentLeft">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate magni veritatis doloribus maxime, quo corporis placeat? Architecto, quos assumenda. Architecto non autem et iste quod libero alias nesciunt deserunt! Sapiente.</h3>
            </div>
            <div className="imgLeft">
                <Parallax bgImage={image5} strength={500}>
                    <div style={{ height: 990 }}>
                    </div>
                </Parallax>
            </div>
            <div className="contentRight" id="feature3">
                <h1 className="contentTitleRight" >FEATURE</h1>
                <h3 className="contentRight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate magni veritatis doloribus maxime, quo corporis placeat? Architecto, quos assumenda. Architecto non autem et iste quod libero alias nesciunt deserunt! Sapiente.</h3>
            </div>
            <Parallax
                bgImage={image6}
                strength={500}
                renderLayer={percentage => (
                    <div>
                        <div
                            style={{
                                position: "absolute",
                                background: `rgba(255, 125, 0, ${percentage * 1})`,
                                left: "50%",
                                top: "50%",
                                borderRadius: "50%",
                                transform: "translate(-50%,-50%)",
                                width: percentage * 500,
                                height: percentage * 500
                            }}
                        />
                    </div>
                )}
            >
                <div style={{ height: 990 }}>
                    <div style={insideStyles}>
                            <Link to="/signup"><button id="mainSignUp">SIGN UP</button></Link>
                        </div>
                </div>
            </Parallax>
        </div>
    </div>
    )
};

export default SplashPage;