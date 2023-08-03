const BlogModel = require('../models/BlogModel');
const mongoose = require('mongoose');

const createBlog = async (req, res) => {
    const {title, body} = req.body;
    try {
        const data = await BlogModel.create({title, body});
        res.status(202).json(data);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}
const getBlogs = async (req, res) => {
    try {
        const data = await BlogModel.find({}).sort({createdAt: -1});
        res.status(202).json(data);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}
const getBlog = async (req, res) => {
    try {
        if (! mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({error: 'Invalid ID'});
        }
        const data = await BlogModel.findById(req.params.id);
        if (!data) {
            return res.status(404).json({error: 'Blog not found'});
        }
        res.status(202).json(data);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}

const deleteBlog = async (req, res) => {
    try {
        if (! mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({error: 'Invalid ID'});
        }
        const data = await BlogModel.findOneAndDelete({_id: req.params.id});
        if (!data) {
            return res.status(404).json({error: 'Blog not found'});
        }
        res.status(202).json(data);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}

const updateBlog = async (req, res) => {
    try {
        if (! mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({error: 'Invalid ID'});
        }
        const data = await BlogModel.findOneAndUpdate({_id: req.params.id}, {...req.body});
        if (!data) {
            return res.status(404).json({error: 'Blog not found'});
        }
        res.status(202).json(data);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}


module.exports = {
    createBlog,
    getBlogs,
    getBlog,
    deleteBlog,
    updateBlog
}