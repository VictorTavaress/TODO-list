import './Filter.css';
import { Dropdown } from 'primereact/dropdown';

import React from 'react';
const filters = [
    { label: 'Todos', value: 'all' },
    { label: 'Concluidos', value: 'completed' },
    { label: 'Pendentes', value: 'pending' },
];

const FilterItems = ({ handleSelect, filter }) => {
    return (
        <div className="Filter-container">
            <Dropdown
                value={filter}
                options={filters}
                onChange={(e) => handleSelect(e.target.value)}
                placeholder="Selecione um filtro"
            />
        </div>
    );
};

export default FilterItems;