import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div>
                <div>
                    <div>
                        <h2> Trending Today </h2>
                        <Slider {...settings}>
                            <div>
                                <img src="./image/TT/1.jpg" alt="" />
                            </div>
                            <div>
                                <img src="./image/TT/2.jpg" alt="" />
                            </div>
                            <div>
                                <img src="./image/TT/3.jpg" alt="" />
                            </div>
                            <div>
                                <img src="./image/TT/4.jpg" alt="" />
                            </div>
                            <div>
                                <img src="./image/TT/5.jpg" alt="" />
                            </div>
                            <div>
                                <img src="./image/TT/6.jpg" alt="" />
                            </div>
                            <div>
                                <img src="./image/TT/7.jpg" alt="" />
                            </div>
                            <div>
                                <img src="./image/TT/8.jpg" alt="" />
                            </div>
                            <div>
                                <img src="./image/TT/9.jpg" alt="" />
                            </div>


                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

