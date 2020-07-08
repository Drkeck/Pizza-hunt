const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers/comments-controller');

// /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);

router.route('/:pizzaId/:commentId').delete(removeComment);

// /api/comments/<pizzaId>/<commentId>
module.exports = router;