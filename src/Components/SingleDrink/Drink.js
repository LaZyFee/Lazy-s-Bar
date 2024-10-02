import React, { useState } from 'react';
import Modal from '../../Modal/Modal';



const Drink = ({ drink, countIncrease }) => {
    const [modalData, setModalData] = useState(null)
    const { strDrink, strDrinkThumb, strCategory, strGlass } = drink


    return (
        <div className='mt-10'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={strDrinkThumb} alt="glass" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{strDrink}</h2>
                    <p className='font-bold'><span className='text-violet-500'>Category:</span>{strCategory}</p>
                    <p className='font-bold'><span className='text-violet-500'>Glass:</span>{strGlass}</p>
                    <div className="card-actions mt-4 justify-center">
                        <label
                            onClick={() => setModalData(drink)}
                            htmlFor="my-modal-3"
                            className="badge badge-outline hover:bg-blue-500 p-5" >
                            Details
                        </label>
                        <div className="badge badge-outline hover:bg-red-500 p-5" onClick={countIncrease}>Buy</div>

                    </div>
                </div>
            </div>
            {modalData && (
                <Modal data={modalData} setModalData={setModalData}></Modal>
            )}
        </div>
    );
};

export default Drink;