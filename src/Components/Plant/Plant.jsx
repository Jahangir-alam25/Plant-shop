import React, { useState } from 'react';

const Plant = ({ plant, handleAddCart, handleCancel, handleConfirm }) => {
  const [showConfirmButtons, setShowConfirmButtons] = useState(false)
  const { name, img_url, price } = plant;
 
  return (
    <div className='bg-white p-5 rounded-md'>
      <h2 className='text-2xl font-bold py-5'>Name : {name}</h2>
      <img className='w-full h-72' src={img_url} alt="" />
      <p className='font-bold py-5'>Price : $ {price}</p>
      <button onClick={() => handleAddCart(setShowConfirmButtons)} className='btn bg-green-400'>Add to Cart</button>
      {showConfirmButtons && (
        <div className="space-x-2 flex my-3">
          <button
            onClick={() => handleCancel(setShowConfirmButtons)}
            className="bg-gray-300 text-black btn flex-1"
          >
            Cancel
          </button>
          <button
            onClick={() => handleConfirm(plant,setShowConfirmButtons)}
            className="bg-green-500 text-white btn flex-1"
          >
            Confirm
          </button>
        </div>
      )}
    </div>
  );
};

export default Plant;