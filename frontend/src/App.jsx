import { useState } from 'react';
import InputForm from './components/InputForm';
import ResponseDisplay from './components/ResponseDisplay';
import MultiFilter from './components/MultiFilter';

const App = () => {
    const [response, setResponse] = useState(null);
    const [selectedFilters, setSelectedFilters] = useState([]);
    
    const handleSubmit = async (data) => {
        const res = await fetch('http://localhost:5000/bfhl', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const result = await res.json();
        setResponse(result);
    };

    const filterResponse = (data) => {
        if (!data) return null;
        let filteredData = {};
        if (selectedFilters.includes("numbers")) {
            filteredData.numbers = data.numbers;
        }
        if (selectedFilters.includes("alphabets")) {
            filteredData.alphabets = data.alphabets;
        }
        if (selectedFilters.includes("highest_alphabet")) {
            filteredData.highest_alphabet = data.highest_alphabet;
        }
        return filteredData;
    };

    return (
        <div>
            <h1>BFHL Fullstack App</h1>
            <InputForm onSubmit={handleSubmit} />
            {response && <MultiFilter options={["numbers", "alphabets", "highest_alphabet"]} selectedOptions={selectedFilters} setSelectedOptions={setSelectedFilters} />}
            {response && <ResponseDisplay data={filterResponse(response)} />}
        </div>
    );
};

export default App;