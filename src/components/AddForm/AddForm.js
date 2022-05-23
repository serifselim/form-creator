import React, { useState } from 'react';
import { getCurrentDate } from '../../utils';
import AddFormBody from './AddFormBody';
import AddFormFooter from './AddFormFooter';
import AddFormHeader from './AddFormHeader';

const AddForm = ({ addNewFormtoArr }) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        const obj = {
            name,
            description,
            createdAt: getCurrentDate(),
            fields: [
                {
                    required: true,
                    name: 'Ad',
                    dataType: 'STRING'
                },
                {
                    required: true,
                    name: 'Soyad',
                    dataType: 'STRING'
                },
                {
                    required: false,
                    name: 'Yaş',
                    dataType: 'NUMBER'
                },
            ]
        };
        setName('');
        setDescription('');
        addNewFormtoArr(obj);
    };

    return (
        <div className="modal fade" id="addForm" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <AddFormHeader />
                    <form onSubmit={handleSubmit}>
                        <AddFormBody
                            name={name}
                            description={description}
                            setName={setName}
                            setDescription={setDescription}
                        />
                        <AddFormFooter
                            name={name}
                            description={description}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddForm;