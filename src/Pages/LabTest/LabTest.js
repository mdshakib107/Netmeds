import React from 'react';
import { Carousel } from 'react-bootstrap';

const LabTest = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./image/Pathology/pathology.png"
                        alt="First slide"

                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./image/rediology/rediology.png"
                        alt="Second slide"

                    />
                </Carousel.Item>
            </Carousel>

            <div className="">

                <img src="./image/rediology/radio.png" alt="" width="100%" />
                <img src="./image/rediology/service location.png" alt="" width="100%" />
                <img src="./image/rediology/highlite.png" alt="" width="100%" />
                <img src="./image/rediology/customer revw.png" alt="" width="100%" />
            </div>
        </div>
    );
};

export default LabTest;