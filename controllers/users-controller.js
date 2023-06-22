const { Users } = require('../models')

const usersController = {
    getAllUsers(req, res) {
        Users.find({})
            .populate([
                { path: 'thoughts', select: 'thoughtText', populate:'reactions'},
                { path: 'friends', select: 'username'}
              
            ])
            .select('-__v')
            .sort({ _id: -1 }) // this puts all in some order
            .then(dbUser => res.json(dbUser))
            .catch(err => {
                console.log(err)
                res.status(400).json(err)
            })
    },

    getUserById({ params }, res) {
        Users.findOne({ _id: params.userId })
            .populate([
                { path: 'thoughts', select: '-__v'},
                { path: 'friends'}
            ])
            .then(dbUser => {
                if (!dbUser) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUser)
            })
            .catch(err => {
                console.log(err)
                res.status(400).json(err)
            })
    },

    addUser({ body }, res) {
        Users.create(body)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(400).json(err))
    },

    addFriend({ params }, res) {
        Users.findOneAndUpdate(
            { _id: params.userId },
            { $push: { friends: params.friendId } },
            { new: true },
         
        )
            .then((dbUser) => {
                if (!dbUser) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUser)
            })
    },

    updateUserById({ params, body }, res) {
        Users.findOneAndUpdate(
            { _id: params.userId },
            body, { new: true }
        )
            .then(dbUsers => {
                if (!dbUsers) {
                    res.status(404).json({ message: 'No user found with this id' })
                    return;
                }
                res.json(dbUsers)
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err)
            })
    },

    deleteUser({ params }, res) {
        Users.findOneAndDelete({ _id: params.userId })
            .then(dbUsers => {
                if (!dbUsers) {
                    res.status(404).json({ message: 'No user found with this id' })
                    return;
                }
                res.json(dbUsers)
            })
            .catch(err => res.status(400).json(err))
    },

    removeFriend({ params }, res) {
        Users.findOneAndUpdate(
            { _id: params.userId },
            { $pull: { friends:  params.friendId } } ,
            { new: true }
        )
            .then(dbUser => {
                if (!dbUser) {
                    res.status(404).json({ message: "No user found with this id!" })
                    return;
                }
                res.json(dbUser)
            }).catch(err => res.json(err));

    }
}

module.exports = usersController
