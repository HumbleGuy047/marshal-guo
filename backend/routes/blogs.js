const express = require('express');
const router = express.Router();
const {createBlog, getBlogs, getBlog, deleteBlog, updateBlog} = require('../controllers/BlogController');

const requireAuth = require('../middleware/requireAuth');


// different requests
router.get('/', getBlogs);

// require auth for all of the routes after this
router.use(requireAuth);    // requireAuth middleware

router.post('/', createBlog);
router.get('/:id', getBlog);
router.delete('/:id', deleteBlog);
router.patch('/:id', updateBlog);

module.exports = router;
