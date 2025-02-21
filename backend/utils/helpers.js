export const processData = (body) => {
    if (!body || !body.data || !Array.isArray(body.data)) {
        return { is_success: false, message: 'Invalid input' };
    }
    const numbers = body.data.filter(item => !isNaN(item));
    const alphabets = body.data.filter(item => isNaN(item));
    const highestAlphabet = alphabets.length ? [alphabets.sort().slice(-1)[0]] : [];
    
    return {
        is_success: true,
        user_id: 'john_doe_17091999',
        email: 'john@xyz.com',
        roll_number: 'ABCD123',
        numbers,
        alphabets,
        highest_alphabet: highestAlphabet
    };
};
