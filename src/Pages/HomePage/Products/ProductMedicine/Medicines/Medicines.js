import React from 'react';
import Medicine from '../Medicine/Medicine';
import useMedicine from '../../../../Hooks/LoadMedicine';
import { Link } from 'react-router-dom';
const Medicines = () => {
    const [medicine] = useMedicine();
    return (
        <div>
            <div className="">
                <h3 className="fs-3 fw-bold text-uppercase  text-dark" >Shop By Catagary</h3>
                <h3 className="fs-4 mx-3  fw-bold text-uppercase  text-dark text-start" >Event & Courses</h3>
                <Link to="/product"><h5 className="text-end mx-4">View All </h5></Link>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-4 g-4 p-3">
                        {medicine.filter(medicine => medicine.key <= 8).map(filteredMedicine => (

                            <Medicine
                                key={filteredMedicine.key}
                                medicine={filteredMedicine}
                            ></Medicine>

                        ))
                        }

                    </div>
                </div>
            </div>



        </div>
    );
};

export default Medicines;