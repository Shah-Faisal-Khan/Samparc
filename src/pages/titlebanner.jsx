import React from "react";
import Form from "./form";
import {Link} from "react-router-dom";
{/* <Link to="/register">
                <button>Start A FREE Fundraiser Now</button>
                </Link>
                <Link to="/login">
                <button>Or Login Into Existing One</button>
                </Link> */}

const Title = ()=>{
    return(
        <div className="title">
            <div className="saviour">
                <p>Be a saviour for many. Donate to help save invaluable lives in India.</p>
                <button>Donate Now</button>
            </div>
            <div className="navbar">
                <img src={require ("../logos/imageedit_6_7363922942.png")} alt="" />
                <div className="links">
                    <h4>Home</h4>
                    <h4>Causes</h4>
                    <h4>About</h4>
                    <h4>Pages</h4>
                    <h4>Blogs</h4>
                </div>
                <div className="buttons">
                    <Link to="/login"><button className="loginBtn">Login</button></Link>
                    <Link to="/register"><button className="signBtn">Sign Up</button></Link>
                    
                    
                    <div className="searchbutn" >
                        <img src={require ("../pages/images/search.png")} alt="" />
                    </div>
                </div>
            </div>
            <div className="backimg">
                <img src={require ("../pages/images/jimmy-conover-LtKoW6kh2eE-unsplash.jpg")} alt="" />
            </div>
            <div className="content">
                <h4>Give Hope For Who In Need</h4>
                <h1>Helping Each Other Can Make World Better</h1>
                <p>We Seek Out World Changers And Difference Makers Around The Globe, And Equip Them To Fulfill Their Unique Purpose</p>
                <div className="mainbutton">
                    <Link to="/login"><button className="donate">Donate Now</button></Link>
                    <Link to="/register"><button className="login">Start A FREE Fundraiser Now</button></Link>
                </div>
            </div>
        </div>
        
    )
}

export default Title;