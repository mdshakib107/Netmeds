import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
            autoplay: true,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
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
            <div className="p-5">
                <div>
                    <div>
                        <h2 className="fs-3 fw-bold text-uppercase  text-dark"> Trending Today </h2>
                        <Slider {...settings}>
                            <div >
                                <img src="./image/TT/1.jpg" alt="" width="400px" />
                            </div>
                            <div>
                                <img src="./image/TT/2.jpg" alt="" width="400px" />
                            </div>
                            <div>
                                <img src="./image/TT/3.jpg" alt="" width="400px" />
                            </div>
                            <div>
                                <img src="./image/TT/4.jpg" alt="" width="400px" />
                            </div>
                            <div>
                                <img src="./image/TT/5.jpg" alt="" width="400px" />
                            </div>
                            <div>
                                <img src="./image/TT/6.jpg" alt="" width="400px" />
                            </div>
                            <div>
                                <img src="./image/TT/7.jpg" alt="" width="400px" />
                            </div>
                            <div>
                                <img src="./image/TT/8.jpg" alt="" width="400px" />
                            </div>
                            <div>
                                <img src="./image/TT/9.jpg" alt="" width="400px" />
                            </div>


                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

