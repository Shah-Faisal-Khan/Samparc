import React from "react";

const GetInTouch = () =>{
    return(
        <div className="getInTouch">
            <h4>Get In Touch</h4>
            <h2>Send Us A Message</h2>
            <div className="contentbox">
                <form action="">
                    <div>
                        <h4>First name</h4>
                        <input type="text" placeholder="Your" />
                    </div>
                    <div>
                        <h4>Last name</h4>
                        <input type="text" placeholder="Name" />
                    </div>
                    <div>
                        <h4>Mail</h4>
                        <input type="Your Email" />
                    </div>
                    <div>
                        <h4>Phone</h4>
                        <input type="text" placeholder="+880" name="" id="" />
                    </div>
                    <div className="msg">
                        <h4>Message</h4>
                        <input type="textarea" name="" id="" placeholder="Type Your Message Here..."/>
                    </div>
                    <button action="submit">Send Message</button>
                </form>
                <div className="sidebox">
                    <h2>Address</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, labore voluptate. Praesentium, cumque. Sit ad animi alias rerum suscipit eum delectus doloremque corporis ex nemo, sunt nobis debitis iste esse sed sapiente voluptatum eligendi officia asperiores, maiores facilis. Ut esse explicabo ipsa. Adipisci? Quisquam, quas.</p>
                    <h4>Location: Andheri East, Mumbai, Maharashtra 400059</h4>
                    <h4>Phone: +88544767456</h4>
                    <h4>Email: Givelifecharity@Gmail.Com</h4>
                </div>
            </div>
        </div>
    )
}
export default GetInTouch;