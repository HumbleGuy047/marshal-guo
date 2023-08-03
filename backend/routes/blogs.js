const express = require('express');
const router = express.Router();
const {createBlog, getBlogs, getBlog, deleteBlog, updateBlog} = require('../controllers/BlogController');

// different requests
router.get('/', getBlogs);
router.post('/', createBlog);
router.get('/:id', getBlog);
router.delete('/:id', deleteBlog);
router.patch('/:id', updateBlog);

module.exports = router;
