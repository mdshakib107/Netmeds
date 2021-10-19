import React from 'react';
import { Link } from 'react-router-dom';

const HelthBlog = () => {
    return (
        <div>
            <h3 className="fs-3 mx-3  fw-bold p-4  text-dark " >Health Laibray</h3>

            <img
                className="d-block w-100"
                src="./image/blog/banner.jpg"
                alt="First slide"
            />
            <h3 className="fs-3 mx-3  fw-bold pt-5 text-dark " >Read Blog's</h3>
            <div className="container pb-4">
                <div className="row row-cols-1 row-cols-md-4 g-4 p-3">
                    <Link to="/blog">  <button type="button" className="btn btn-outline-secondary">Fitness</button></Link>
                    <Link to="/blog">
                        <button type="button" className="btn btn-outline-secondary">Food</button>
                    </Link>
                    <Link to="/blog">
                        <button type="button" className="btn btn-outline-secondary">Lifestyle</button>
                    </Link>
                    <Link to="/blog">
                        <button type="button" className="btn btn-outline-secondary">Cardiology</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HelthBlog;