import React from "react";

const Newsletter = ()=>{
    return(
        <div className="newsletter">
            {/* <h1>Download the App</h1> */}
            {/* <img src= {require ("../logos/playstore.png")} alt="" />
            <img src={require ("../logos/appstore.png")}alt="" /> */}
            <h3>Newsletter</h3>
            <div>
                <input type="text" placeholder="Enter Your Email" />
                <button>Subscribe</button>
            </div>
            <p>Your email is safe with us, we don't spam.</p>
            <h3>Follow Us</h3>
            <div className="socialmedia">
                <img src={require ("../logos/linkedfoot.png")} alt="" />
                <img src={require ("../logos/youtubefoot.png")} alt="" />
                <img src={require ("../logos/xfoot.jpg")} alt="" />
                <img src={require ("../logos/instafoot.png")} alt="" />
                <img src={require ("../logos/whatsfoot.png")} alt="" />
            </div>
        </div>
        
    )
}

export default Newsletter;