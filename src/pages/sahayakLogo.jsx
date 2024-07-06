import React from "react";

const Sahayaklogo = ()=>{
    return(
    <div className="sahayakLogo">
        <div className="sahayakbox">
            <img src={require ("../logos/imageedit_6_7363922942.png")} alt="" />
        </div>
        
        {/* <div className="socialimgs">
            <img src={require ("../logos/linkedfoot.png")} alt="" />
            <img src={require ("../logos/youtubefoot.png")} alt="" />
            <img src={require ("../logos/xfoot.jpg")} alt="" />
            <img src={require ("../logos/instafoot.png")} alt="" />
            <img src={require ("../logos/whatsfoot.png")} alt="" />
        </div>

        <div className="queries">
            <h4>For Any Queries</h4>
            <h5>Email: info@samparc.org</h5>
            <h5>Contact No:</h5>
            <h5>+917879291771</h5>

        </div> */}
        <div className="install">
            <img src= {require ("../logos/playstore.png")} alt="" />
            <img src={require ("../logos/appstore.png")}alt="" /> 
        </div>
    </div>
        
    )
}

export default Sahayaklogo;