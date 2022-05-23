import React from 'react';

const AddForm = () => {
    return (
        <div class="modal fade" id="addForm" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Form Oluştur</h5>
                        <button type="button" class="btn btn-close" data-bs-dismiss="modal">X</button>
                    </div>
                    <div class="modal-body">

                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
                        <button class="btn btn-success" data-bs-dismiss="modal">Ekle</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddForm;