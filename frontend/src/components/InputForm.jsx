import { useState } from 'react';

const InputForm = ({ onSubmit }) => {
    const [input, setInput] = useState('');
    const [error, setError] = useState('');
    
    const handleSubmit = () => {
        try {
            const jsonData = JSON.parse(input);
            if (!jsonData.data || !Array.isArray(jsonData.data)) {
                throw new Error('Invalid JSON structure');
            }
            setError('');
            onSubmit(jsonData);
        } catch (error) {
            setError('Invalid JSON. Ensure it follows the required format.');
        }
    };

    return (
        <div>
            <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder='{"data": ["A", "B", "1"]}'/>
            <button onClick={handleSubmit}>Submit</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default InputForm;