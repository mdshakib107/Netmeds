import React from 'react';
import { Button } from 'react-bootstrap';
const Medicine = (props) => {
    console.log(props.medicine)
    const { name, bestPrice, mrp, mkt, img } = props.medicine;
    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    <img src={img} className="card-img-top" alt="..." height="300px" width="100px" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <small className="">{mkt}</small>
                        <p className="card-text">{bestPrice}</p>
                        <p className="card-text">{mrp}</p>
                        <Button variant="outline-success">Details</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Medicine;