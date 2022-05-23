import React from 'react';
import TableHeader from './TableHeader';
import TableItem from './TableItem';

const Table = ({ forms }) => {
    return (
        <table className="table container text-center mt-3 border rounded">
            <TableHeader />
            <tbody>
                {forms && forms.map((form, index) => (
                    <TableItem
                        key={index}
                        index={index}
                        form={form}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default Table;