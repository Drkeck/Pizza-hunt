const router = require('express').Router();
const { addComment, removeComment, addReply, removeReply } = require('../../controllers/comments-controller');

// /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);

router.route('/:pizzaId/:commentId')
.put(addReply)
.delete(removeComment);

router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);

// /api/comments/<pizzaId>/<commentId>
module.exports = router;