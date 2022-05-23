import React from 'react';
import { Link } from 'react-router-dom';

const TableItem = ({ form, index }) => {
    const { name, description, createdAt } = form;

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{description}</td>
            <td>{createdAt}</td>
            <td>
                <Link
                    to={`/forms/${name}`}
                    state={form}
                    className='bg-primary text-light rounded p-1 pe-auto text-decoration-none'
                >
                    Git {'->'}
                </Link>
            </td>
        </tr>
    );
};

export default TableItem;