import React from 'react';
import ReactPlayer from "react-player";
const MoreMealModal = (props) => {
    return (
        <div>
            <div>
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label
                            onClick={() => props.setModalData(null)}
                            htmlFor="my-modal-3"
                            className="btn btn-sm btn-circle absolute right-2 top-2"
                        >
                            ✕
                        </label>
                        <ReactPlayer url={props?.data.strYoutube} controls width='auto' />

                        <h3 className="text-xl text-center font-bold whitespace-break-spaces text-orange-500">{props?.data.strInstructions}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoreMealModal;