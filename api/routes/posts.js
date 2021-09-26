const { Router } = require('express');
const {list, show, create, deletePost} = require('../controllers/postController');

const router = Router();

router.get('/posts', list);
router.get('/posts/:slug', show);
router.post('/posts', create);
router.delete('/posts/:id', deletePost);

module.exports = router;