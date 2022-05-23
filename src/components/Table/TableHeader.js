import React from 'react';

const TableHeader = () => {
    return (
        <thead className="thead-light">
            <tr>
                <th>#</th>
                <th>Başlık</th>
                <th>Açıklama</th>
                <th>Tarih</th>
                <th>Forma Git</th>
            </tr>
        </thead>
    );
};

export default TableHeader;