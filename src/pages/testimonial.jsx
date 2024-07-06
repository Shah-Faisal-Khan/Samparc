import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = ()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay:true,
        arrows: true
    };

    return (
        <div className="mainBox">
            <div className="testimonials">
                <h4>Our Testimonials</h4>
                <h2>What People Say</h2>
                <div className="slider">
                    <Slider {...settings} className="myslider">
                        {data.map((d, index) => (
                            <div key={index} className="aCard">
                                <div className="imgbox">
                                    <img className="cardimg" src={d.img} alt="" />
                                </div>
                                <div className="cardtext">
                                    <h3>{d.name}</h3>
                                    <h4>{d.position}</h4>
                                    <p>{d.content}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="partners">
                <h4>Partners</h4>
                <h2>Healthcare Brands Who Trust Us</h2>
                <div className="icons">
                    <div className="oneicon">
                        <img src={require("./images/3052613702331.jpg")} alt="" />
                    </div>
                    <div className="oneicon">
                        <img src={require("./images/305261370233.jpg")} alt="" />
                    </div>
                    <div className="oneicon">
                        <img src={require("./images/3052613702332.jpg")} alt="" />
                    </div>
                    <div className="oneicon">
                        <img src={require("./images/3052613702334.jpg")} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );

    
};

const data = [
    {
        name : 'Akash Kataria',
        img: require('./images/worry.png'),
        position: 'Founder',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, deserunt. In eaque nobis culpa ullam, voluptas corrupti incidunt provident quae, sunt voluptatum reiciendis et dolor repellat repudiandae architecto maiores enim!'
    },
    {
        name : 'Akash Kataria',
        img: require('./images/worry.png'),
        position: 'Founder',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, deserunt. In eaque nobis culpa ullam, voluptas corrupti incidunt provident quae, sunt voluptatum reiciendis et dolor repellat repudiandae architecto maiores enim!'
    },
    {
        name : 'Akash Kataria',
        img: require('./images/worry.png'),
        position: 'Founder',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, deserunt. In eaque nobis culpa ullam, voluptas corrupti incidunt provident quae, sunt voluptatum reiciendis et dolor repellat repudiandae architecto maiores enim!'
    },
    {
        name : 'Akash Kataria',
        img: require('./images/worry.png'),
        position: 'Founder',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, deserunt. In eaque nobis culpa ullam, voluptas corrupti incidunt provident quae, sunt voluptatum reiciendis et dolor repellat repudiandae architecto maiores enim!'
    }
]

export default Testimonial;