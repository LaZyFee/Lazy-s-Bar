import React, { useState } from 'react';
import MoreMealModal from '../Components/MealModal/MoreMealModal';

const MoreMealDetails = ({ meal, countIncrease }) => {
    const [modalData, setModalData] = useState(null)
    const { strMeal, strMealThumb } = meal;
    return (
        <div className='mt-10'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={strMealThumb} alt="meal" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{strMeal}</h2>

                    <div className="card-actions mt-4 justify-center">
                        <label
                            onClick={() => setModalData(meal)}
                            htmlFor="my-modal-3"
                            className="badge badge-outline hover:bg-blue-500 p-5" >
                            Details
                        </label>
                        <div className="badge badge-outline hover:bg-red-500 p-5" onClick={countIncrease}> Buy</div>
                    </div>
                </div>
            </div>
            {modalData && (
                <MoreMealModal data={modalData} setModalData={setModalData}></MoreMealModal>
            )}
        </div>
    );
};

export default MoreMealDetails;