import React from 'react';

const AddFormBody = () => {
    return (
        <div className="modal-body">
            <div class="mb-3">
                <label for="title" class="form-label">Başlık</label>
                <input required class="form-control" />
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">Açıklama</label>
                <input required class="form-control" />
            </div>
        </div>
    );
};

export default AddFormBody;