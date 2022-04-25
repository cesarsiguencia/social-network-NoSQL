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
    .get(getThoughtById)
    .post(addThought)
    .put(updateThoughtById)
    .delete(deleteThought)