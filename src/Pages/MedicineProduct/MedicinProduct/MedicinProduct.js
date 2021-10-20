import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MedicinProduct = (props) => {

    const { name, bestPrice, mrp, mkt, img, key } = props.medicine;
    return (
        <div>
            <div className="col">
                <div className="card cart">
                    <img src={img} className="card-img-top " alt="..." />
                    <div className="card-body">
                        <h6 className="card-title">{name}</h6>
                        <small className="">{mkt}</small>
                        <p className="card-text">{bestPrice}</p>
                        <p className="card-text">{mrp}</p>
                        <Link to={`/medicine${key}`}>
                            <Button variant="outline-success mx-auto"><i className="fas fa-info-circle"></i> Details</Button>
                        </Link>
                        <Button variant="outline-success mx-1"> Add To Cart</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MedicinProduct;