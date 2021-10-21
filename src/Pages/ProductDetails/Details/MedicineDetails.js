import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Button } from 'react-bootstrap';


const MedicineDetails = () => {
    const { key } = useParams();

    const [medicine, setMedicine] = useState({});
    // console.log(medicine)

    useEffect(() => {
        const url = `/FakeData/medicin.json`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                const survice = data.find(survice => survice.key == key)
                setMedicine(survice)
                console.log(data);
            }
            );
    }, []);


    const { name, ingredent, bestPrice, mrp, tax, bestPriceNote, details, mkt, country, delivary, netQuantity, itemWeight, hsnCode, img } = medicine;



    return (
        <div>
            <div className="container p-4">
                <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={img} className="img-fluid rounded-start h-100" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body text-start">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text"><small className="text-muted">{ingredent}</small></p>
                                <p className="card-text"><small className="text-muted">{mkt}</small></p>
                                <h5 className="card-title  ">{bestPrice}</h5>
                                <p className="card-text">{mrp}</p>
                                <p className="card-text">{tax}</p>
                                <p className="card-text">{bestPriceNote}</p>
                                <p className="card-text">{details}</p>
                                <p className="card-text">{delivary}</p>
                                <Button variant="outline-success mx-1"> Add To Cart</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col"> </th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td>Country</td>
                            <td>{country}</td>

                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>Item Weight</td>
                            <td>{itemWeight}</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>Net Quantity</td>
                            <td>{netQuantity}</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>HsnCode</td>
                            <td>{hsnCode}</td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default MedicineDetails;
