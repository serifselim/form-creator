import React, { useState } from 'react';
import Table from '../../components/Table/Table';
import { AddForm } from '../../components';

const Main = () => {
    const [forms, setForms] = useState([]);

    const addNewFormtoArr = (payload) => {
        setForms(prevState => [...prevState, payload]);
    };

    return (
        <div>
            <AddForm addNewFormtoArr={addNewFormtoArr} />
            <Table forms={forms} />
        </div>
    );
};

export default Main;