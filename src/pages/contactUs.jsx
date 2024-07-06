import React from "react";
import { Link } from "react-router-dom";

const ContactUs = ()=>{
    return(
        <div className="contactus">
            

            <div className="touch">
                <div className="touchcard">
                    <img className="img1" src={require("./images/olga-guryanova-tMFeatBSS4s-unsplash.jpg")} alt="" />
                    <img className="img2" src={require("./images/shifaaz-shamoon-MqLy-G-dBi8-unsplash.jpg")} alt="" />
                </div>
            </div>
            <div className="outmoney">
                <h6>Get Help</h6>
                <h1>Out Of Money For Medical Treatment?</h1>
                <div className="missionvision">
                    <div className="ourmission">
                        <div className="bluetitle">
                            <img src={require("./images/imageedit_4_9588039983.png")}alt="" />
                            <h4>Our Mission</h4>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam soluta voluptates eaque fugit sequi magnam, ipsum ea quaerat odit voluptatibus.</p>                        
                    </div>
                    <div className="ourvision">
                    <div className="bluetitle">
                            <img src={require("./images/imageedit_13_2520277950.png")} alt="" />
                            <h4>Our Vision</h4>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolore provident impedit non corporis ullam illum libero ipsum optio sapiente?</p>
                    </div>
                </div>
                <p>Wondering How to Find Your Healing Journey?</p>
                <p>Your Finding is Just a Click Away!</p>
                <Link to="/reachout">
                <button>Contact Us Now</button>
                </Link>
                
            </div>
        </div>
        
    )
}

export default ContactUs;