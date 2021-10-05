const { Router } = require('express');
const {listToAccept, showToAccept, updateToAccept} = require('../controllers/adminController');

const router = Router();

router.get('/admin/posts', listToAccept);
router.get('/admin/posts/:slug', showToAccept);
router.put('/admin/posts', updateToAccept);

module.exports = router;