import React from 'react';

const Plant = ({plant}) => {
    const {name, img_url, price} = plant;
    return (
        <div className='bg-white p-5 rounded-md'>
            <h2 className='text-2xl font-bold py-5'>Name : {name}</h2>
            <img className='w-full h-72' src={img_url} alt="" />
            <p className='font-bold py-5'>Price : $ {price}</p>
            <button className='btn bg-green-400'>Add to Cart</button>
        </div>
    );
};

export default Plant;