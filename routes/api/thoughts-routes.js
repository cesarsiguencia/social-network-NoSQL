const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThoughtById,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughts-controller')

router
    .route('/')
    .get(getAllThoughts)


router
    .route('/:userId')
    .post(addThought)

router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThoughtById)
    .delete(deleteThought)

router
    .route('/:thoughtId/reactions')
    .post(addReaction)

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction)

module.exports = router;