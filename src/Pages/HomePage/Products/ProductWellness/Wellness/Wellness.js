import React from 'react';
import { Button } from 'react-bootstrap';
const Wellness = (props) => {

    const { name, bestPrice, mrp, mkt, img } = props.wellness;
    return (
        <div>
            <div className="col">
                <div className="card cart">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h6 className="card-title">{name}</h6>
                        <small className="">{mkt}</small>
                        <p className="card-text">{bestPrice}</p>
                        <p className="card-text">{mrp}</p>
                        <Button variant="outline-success"><i className="fas fa-info-circle"></i> Details</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wellness;