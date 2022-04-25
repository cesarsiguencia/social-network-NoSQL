const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    addUser,
    addFriend,
    updateUserById,
    deleteUser,
    removeFriend

} = require('../../controllers/users-controller')

router
    .route('/')
    .get(getAllUsers)
    .get(getUserById)
    .post(addUser)
    .put(updateUserById)
    .delete(deleteUser)

router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend)


module.exports = router