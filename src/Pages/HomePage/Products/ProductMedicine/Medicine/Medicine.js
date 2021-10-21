import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Medicine.css'
const Medicine = (props) => {
    // console.log(props.medicine)  
    const { name, bestPrice, mrp, mkt, img, key } = props.medicine;
    return (
        <div>
            <div className="col">
                <div className="card cart text-start">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body py-1">
                        <h6 className="card-title fw-bold">{name}</h6>
                        <p className="card-text"><small className="text-muted fst-italic">{mkt}</small></p>
                        <h5 className="card-title fw-bold text-danger ">Best Price: {bestPrice}</h5>
                        <p className="card-text fst-italic">MRP:  <span className="text-decoration-line-through"> {mrp}</span></p>
                        <Link to={`/medicine${key}`}>
                            <Button variant="outline-success mx-1"><i className="fas fa-info-circle"></i> Details</Button>
                        </Link>
                        <Button variant="outline-success mx-1"> Add To Cart</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Medicine;