const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThoughtById,
    deleteThought
} = require('../../controllers/thoughts-controller')

router
    .route('/')
    .get(getAllThoughts)


router
    .route('/:userId')
    .post(addThought)

router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThoughtById)
    .delete(deleteThought)

module.exports = router;