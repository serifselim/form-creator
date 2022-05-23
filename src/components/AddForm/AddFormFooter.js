import React from 'react';

const AddFormFooter = ({ title, desc }) => {
    const isFormFill = title && desc && 'modal';

    return (
        <div className="modal-footer">
            <button className="btn btn-success" data-bs-dismiss={isFormFill}>Kaydet</button>
        </div>
    );
};

export default AddFormFooter;