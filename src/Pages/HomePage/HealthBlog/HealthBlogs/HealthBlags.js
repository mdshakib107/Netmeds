import React from 'react';
import { Link } from 'react-router-dom';
import useBlog from '../../../Hooks/LoadBlog';
import HealthBlag from '../HelthBlog/HelthBlog';

const HealthBlags = () => {
    const [blog] = useBlog();
    return (
        <div>
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
            <div className="">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-4 g-4 p-3">
                        {blog.map(blog => (
                            <HealthBlag
                                key={blog.key}
                                blog={blog}
                            >
                            </HealthBlag>

                        ))
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HealthBlags;