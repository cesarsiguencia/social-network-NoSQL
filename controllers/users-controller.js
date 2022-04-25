const { Users } = require('../models')

const usersController = {
    getAllUsers(req, res){
        Users.find({})
            .select('-__v')
            .sort({ _id: -1 })
                .then(dbUser => res.json(dbUser))
                .catch(err => {
                    console.log(err)
                    res.status(400).json(err)
                })
    },

    getUserById({ params }, res){
        Users.findOne({ _id: params.id })
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
                .then(dbUser => {
                    if(!dbUser){
                        res.status(404).json({ message: 'No user found with this id!'});
                    return;
                    }
                    res.json(dbUser)
                })
                .catch(err => {
                    console.log(err)
                    res.status(400).json(err)
                })
    },

    addUser({ body }, res){
        Users.create(body)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(400).json(err))
    },

    addFriend({ params, body }, res){
        Users.findOneAndUpdate(
            {_id: params.userid},
            { $push: { friends: body } },
            { new: true }
        )
        .then(({ dbUser }) => {
            if (!dbUser) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.jsoon(dbUser)
        })
    },



    updateUserById({ params, body }, res){
        Users.findOneAndUpdate(
            { _id: params.id },
            body, { new: true }
            )
                .then(dbUsers => {
                    if(!dbUsers){
                        res.status(404).json({ message: 'No user found with this id'})
                    return;
                    }
                res.json(dbUsers)
                })
                .catch(err => {
                    console.log(err);
                    res.status(400).json(err)
                })
    },  
    deleteUser({ params }, res){
        Users.findOneAndDelete({ _id: params.id })
            .then(dbUsers => {
                if(!dbUsers){
                    res.status(404).json({ message: 'No user found with this id'})
                return;
                }
                res.json(dbUsers)
            })
            .catch(err => res.status(400).json(err))
    },

    removeFriend({ params }, res){
        Users.findOneAndUpdate( { id: params.userid },
            { $pull: { friends: { friendId: params. friendId}}},
            { new: true}
            )
            .then(dbUser => {
                if(!dbUser){
                    res.status(404).json({ message: "No user found with this id!"})
                    return;
                }
                res.json(dbUser)
            }).catch(err => res.json(err));
            
    }
}

module.exports = usersController