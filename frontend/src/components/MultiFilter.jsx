import { useState } from 'react';

const MultiFilter = ({ options, selectedOptions, setSelectedOptions }) => {
    const handleChange = (event) => {
        const value = event.target.value;
        setSelectedOptions(prev =>
            prev.includes(value) ? prev.filter(opt => opt !== value) : [...prev, value]
        );
    };

    return (
        <div>
            <label>Filter Response:</label>
            <select multiple value={selectedOptions} onChange={handleChange}>
                {options.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
};

export default MultiFilter;