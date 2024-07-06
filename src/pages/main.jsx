import React from "react";
import Title from "./titlebanner";
import ContactUs from "./contactUs";
import KnowMore from "./knowMore";
import Campaigns from "./campaigns";
import Testimonial from "./testimonial";

const Main = ()=>{
    return(
        <div>
        <Title></Title>
        <ContactUs></ContactUs>
        <Campaigns></Campaigns>
        <Testimonial></Testimonial>
        <KnowMore></KnowMore>
        </div>
        
    )
}

export default Main;