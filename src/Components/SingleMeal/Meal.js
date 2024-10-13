import React, { useState } from 'react';
import ModalMeal from '../MealModal/ModalMeal';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Meal = ({ meal, countIncrease }) => {
    const [modalData, setModalData] = useState(null)
    // console.log(modalData);
    const { strCategory, strCategoryThumb } = meal;
    return (
        <div className='mt-10'>
            <div className="card lg:w-96 w-72 bg-base-100 shadow-xl mx-auto">
                <figure><img src={strCategoryThumb} alt="meal" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{strCategory}</h2>

                    <div className="card-actions mt-4 justify-center">
                        <label
                            onClick={() => setModalData(meal)}
                            htmlFor="my-modal-3"
                            className="badge badge-outline hover:bg-blue-500 p-5" >
                            Details
                        </label>
                        <div className="badge badge-outline hover:bg-red-500 p-5" onClick={countIncrease}> Buy</div>
                        <Link to={`${strCategory}`}> <button className='btn btn-link'> more related..</button></Link>
                    </div>
                </div>
            </div>
            {modalData && (
                <ModalMeal data={modalData} setModalData={setModalData}></ModalMeal>
            )}
        </div>
    );
};

export default Meal;