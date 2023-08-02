const BlogModel = require('../models/BlogModel');
const express = require('express');
const router = express.Router();

// different requests
router.get('/', (req, res) => {
    res.json({mssg: 'Get all request'})
});
router.post('/', async (req, res) => {
    const {title, body} = req.body;

    try {
        const model = await BlogModel.create({title, body});
        res.status(202).json(model);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});
router.get('/:id', (req, res) => {
    res.json({mssg: 'Get single request'})
});
router.delete('/:id', (req, res) => {
    res.json({mssg: 'Delete single request'})
});
router.patch('/:id', (req, res) => {
    res.json({mssg: 'Update single request'})
});

module.exports = router;
