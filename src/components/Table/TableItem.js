import React from 'react';

const TableItem = ({ index, name, description, createdAt, fields }) => {
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{description}</td>
            <td>{createdAt}</td>
            <td>
                <a href='/#' className='bg-primary text-light rounded p-1 pe-auto text-decoration-none'>
                    Git ->
                </a>
            </td>
        </tr>
    );
};

export default TableItem;