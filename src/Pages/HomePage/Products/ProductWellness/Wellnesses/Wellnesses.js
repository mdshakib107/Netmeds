import React from 'react';
import useWellness from '../../../../Hooks/LoadWellness';
import { Link } from 'react-router-dom';
import Wellness from '../Wellness/Wellness';
const Wellnesses = () => {
    const [wellness] = useWellness();
    return (
        <div>
            <div className="">
                <h3 className="fs-3 mx-3  fw-bold p-4  text-dark text-start" >Popular Products Wellness</h3>
                <Link className="text-decoration-none" to="/productwellness"><h5 className="text-end mx-5 text-decoration-none text- fw-bold fs-5 text-dark">View All </h5></Link>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-4 g-4 p-3">
                        {wellness.filter(wellness => wellness.key <= 8).map(filteredWellness => (
                            <Wellness

                                key={filteredWellness.key}
                                wellness={filteredWellness}
                            >
                            </Wellness>


                        ))
                        }

                    </div>
                </div>
            </div>



        </div>
    );
};

export default Wellnesses;