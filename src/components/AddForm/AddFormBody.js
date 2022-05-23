import React from 'react';

const AddFormBody = ({ name, description, setName, setDescription }) => {
    return (
        <div className="modal-body">
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Başlık</label>
                <input required className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Açıklama</label>
                <input required className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
        </div>
    );
};

export default AddFormBody;