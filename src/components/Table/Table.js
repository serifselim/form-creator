import React from 'react';
import TableHeader from './TableHeader';
import TableItem from './TableItem';

const Table = () => {
    return (
        <table className="table container text-center mt-3 border rounded">
            <TableHeader />
            <tbody>
                <TableItem />
            </tbody>
        </table>
    );
};

export default Table;