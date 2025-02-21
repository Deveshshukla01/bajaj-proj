export const handlePostRequest = (req, res) => {
    const { data } = req.body;
    if (!data || !Array.isArray(data)) {
        return res.status(400).json({ is_success: false, message: "Invalid input" });
    }
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highestAlphabet = alphabets.length ? [alphabets.sort().reverse()[0]] : [];
    
    res.json({
        is_success: true,
        user_id: "your_id",
        email: "your_email@domain.com",
        roll_number: "YOUR_ROLL_NUMBER",
        numbers,
        alphabets,
        highest_alphabet: highestAlphabet
    });
};

export const handleGetRequest = (req, res) => {
    res.json({ operation_code: 1 });
};