import React from 'react';
import AddFormBody from './AddFormBody';
import AddFormFooter from './AddFormFooter';
import AddFormHeader from './AddFormHeader';

const AddForm = () => {
    return (
        <div class="modal fade" id="addForm" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <AddFormHeader />
                    <form>
                        <AddFormBody />
                        <AddFormFooter />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddForm;