const { Router } = require('express');
const postController = require('../controllers/postController');

const router = Router();

router.get('/posts', postController.list);
router.get('/posts/:slug', postController.show);
router.post('/posts', postController.create);

module.exports = router;