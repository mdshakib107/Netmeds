import React from 'react';
import { Link } from 'react-router-dom';


const LabTest = () => {
    return (
        <div>
            <h3 className="fs-3 mx-3  fw-bold p-4  text-dark " >Lab Tests</h3>

            <img
                className="d-block w-100"
                src="./image/ipl.jpg"
                alt="First slide"
            />
            <h3 className="fs-3 fw-bold text-uppercase  text-dark p-3" >Book Now </h3>
            <div className="container ">
                <div className="row row-cols-1 row-cols-md-2 g-4 p-3">
                    <div className=" ">


                        <Link to="/labtest"><button type="button" className="btn btn-outline-secondary p-2">Rediology</button></Link>
                    </div>
                    <div className="">

                        <Link to="/labtest"><button type="button" className="btn btn-outline-secondary p-2">Pathology</button></Link>
                    </div>
                </div>
            </div>
            <div className="p-5"><h3 className="fs-4 mx-5  fw-bold  text-dark text-start" >Our Highlights
            </h3>
                <div className="container ">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 ">
                        <div className="col g-4"><img src="./image/lab/1.png" alt="" /></div>
                        <div className="col g-4"><img src="./image/lab/2.png" alt="" /></div>
                        <div className="col g-4"><img src="./image/lab/3.png" alt="" /></div>
                        <div className="col g-4"><img src="./image/lab/4.png" alt="" /></div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LabTest;