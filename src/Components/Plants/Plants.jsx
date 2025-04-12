import React, { use } from 'react';
import Plant from '../Plant/Plant';

const Plants = ({plantsPromise,handleAddCart,handleConfirm,handleCancel}) => {
    const plants = use(plantsPromise)
    return (
        <div className='bg-green-100'>
            <h1 className='text-4xl font-bold py-12 text-center'>Total Plants : {plants.length}</h1>
            <div className='grid grid-cols-3 gap-5 px-20'>
                {
                    plants.map(plant=><Plant
                        key={plant.id}
                        handleAddCart={handleAddCart}
                        handleConfirm={handleConfirm}
                        handleCancel={handleCancel}
                        plant={plant}></Plant>)
                }
            </div>
        </div>
    );
};

export default Plants;