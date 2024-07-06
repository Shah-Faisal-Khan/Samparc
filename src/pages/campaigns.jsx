import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Campaigns = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        autoplay:true
    };

    return (
        <div className="campaigns">
            <div className="campaigntitle">
                <h6>Latest Causes</h6>
                <h1>Find The Popular Cause And Donate Them</h1>
            </div>
            <div className="bigContainer">
                <div className="slider">
                    <Slider {...settings} className="myslider">
                        {data.map((d, index) => (
                            <div key={index} className="aCard">
                                <div className="imgbox">
                                    <img className="cardimg" src={d.img} alt="" />
                                </div>
                                <div className="cardtext">
                                    <h2>{d.purpose}</h2>
                                    <h4>By {d.name}</h4>
                                    <h4>Progress {d.progress}</h4>
                                    <button>Donate Now</button>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

const data = [
    {
        name: `Hon`,
        img: require('./images/shifaaz-shamoon-MqLy-G-dBi8-unsplash.jpg'),
        purpose: `Helping the Homeless`,
        progress: '85%'
    },
    {
        name: `Hon`,
        img: require('./images/shifaaz-shamoon-MqLy-G-dBi8-unsplash.jpg'),
        time: `lorem ipsum20`,
        purpose: `Helping the Homeless`,
        progress: '85%'
    },
    {
        name: `Hon`,
        img: require('./images/shifaaz-shamoon-MqLy-G-dBi8-unsplash.jpg'),
        time: `lorem ipsum20`,
        purpose: `Helping the Homeless`,
        progress: '85%'
    },
    {
        name: `Hon`,
        img: require('./images/shifaaz-shamoon-MqLy-G-dBi8-unsplash.jpg'),
        time: `lorem ipsum20`,
        purpose: `Helping the Homeless`,
        progress: '85%'
    },
    {
        name: `Hon`,
        img: require('./images/shifaaz-shamoon-MqLy-G-dBi8-unsplash.jpg'),
        time: `lorem ipsum20`,
        purpose: `Helping the Homeless`,
        progress: '85%'
    }
    
];

export default Campaigns;
