import React from 'react';

import useWellness from '../../Hooks/LoadWellness';
import ProductWellness from '../ProductWellness/ProductWellness';

const ProductsWellness = () => {
    const [wellness] = useWellness();
    return (
        <div>
            <div className="">
                <img className="w-100" src="./image/banar/4.jpg" alt="" />
                <h3 className="fs-3 mx-3  fw-bold p-4  text-dark " >Wellness</h3>

                <div className="container">
                    <div className="row row-cols-1 row-cols-md-4 g-4 p-3">
                        {wellness.map(wellness => (
                            <ProductWellness

                                key={wellness.key}
                                wellness={wellness}
                            >
                            </ProductWellness>


                        ))
                        }

                    </div>
                </div>
            </div>



        </div>
    );
};

export default ProductsWellness;