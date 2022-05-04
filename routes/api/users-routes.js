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
    .post(addUser)
  
router
    .route('/:id')
    .get(getUserById)
    .delete(deleteUser)
    .put(updateUserById)

router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend)


module.exports = router