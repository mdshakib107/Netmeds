import React from 'react';
import Medicine from '../Medicine/Medicine';
import useMedicine from '../../../../../Hooks/LoadMedicine';
import { Link } from 'react-router-dom';
const Medicines = () => {
    const [medicine] = useMedicine();
    return (
        <div>
            <div className="">
                <h3 className="fs-3 fw-bold text-uppercase  text-dark" >Shop By Catagary</h3>
                <h3 className="fs-3 mx-3  fw-bold p-4  text-dark text-start" >Popular Products Medicine</h3>
                <Link className="text-decoration-none" to="/productmedicine"><h5 className="text-end mx-5 text-decoration-none text- fw-bold fs-5 text-dark">View All </h5></Link>
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