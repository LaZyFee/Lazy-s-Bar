import React from 'react';

const Modal = (props) => {
    return (
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
                    <h3 className="text-2xl text-center font-bold text-orange-500">{props?.data.strInstructions}</h3>
                </div>
            </div>
        </div>
    );
};

export default Modal;