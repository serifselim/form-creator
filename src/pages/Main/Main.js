import React, { useState, useEffect } from 'react';
import Table from '../../components/Table/Table';
import { AddForm } from '../../components';
import { getDataFromLocalStorage, setDataToLocalStorage } from '../../utils';

const Main = () => {
    const [forms, setForms] = useState([]);

    useEffect(() => {
        const data = getDataFromLocalStorage('forms');
        setForms(data ? data : []);
    }, []);

    useEffect(() => {
        setDataToLocalStorage('forms', forms);
    }, [forms]);

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