const { Router } = require('express');
const {list, show, create} = require('../controllers/postController');

const router = Router();

router.get('/posts', list);
router.get('/posts/:slug', show);
router.post('/posts', create);

module.exports = router;