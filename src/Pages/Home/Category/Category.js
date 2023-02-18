import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { position, picture } = category;
    return (
        <Link to={`/allProducts/${position}`}>
            <div className="card    shadow-xl image-full text-center">
                <figure className='h-60 '><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className=" text-center font-extrabold my-auto text-3xl">{position}</h2>


                </div>
            </div>
        </Link>
    );
};

export default Category;