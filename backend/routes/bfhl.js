import express from 'express';
import { processData } from '../utils/helpers.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

router.post('/', (req, res) => {
    const response = processData(req.body);
    res.json(response);
});

export default router;