import React from 'react';

const ShowCart = ({ cart, removeCartFromShowCart }) => {
    const { name, img_url, price } = cart;
    return (
        <div className='flex justify-between p-4 border rounded-md bg-green-50 gap-5'>
            <div className='flex justify-between gap-5 items-center'>
                <div className="avatar">
                    <div className="mask mask-squircle h-20 w-20 p-4 bg-white">
                        <img
                            src={img_url}
                            alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
                <div>
                    <h2>{name}</h2>
                    <p>$ {price}</p>
                </div>
            </div>
            <button onClick={() => removeCartFromShowCart(cart)} className='text-red-700 text-2xl font-bold'>x</button>
        </div>
    );
};

export default ShowCart;