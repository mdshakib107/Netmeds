import React from 'react';

const HealthBlag = (props) => {

    const { img } = props.blog;
    return (
        <div>
            <div className="card bg-dark text-white">
                <img src={img} className="card-img" alt="..." />

            </div>

        </div >
    );
};

export default HealthBlag;