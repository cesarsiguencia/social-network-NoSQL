const { Thoughts, Users } = require('../models')

const thoughtsController = {
    getAllThoughts(req, res){
        Thoughts.find({})
            .select('-__v')
            .sort({ _id: -1 })
                .then(dbThoughts => res.json(dbThoughts))
                .catch(err => {
                    console.log(err)
                    res.status(400).json(err)
                })
    },

    getThoughtById({ params }, res){
        Thoughts.findOne({ _id: params.id })
                .then(dbThought => {
                    if(!dbThought){
                        res.status(404).json({ message: 'No thought found with this id!'});
                    return;
                    }
                    res.json(dbThought)
                })
                .catch(err => {
                    console.log(err)
                    res.status(400).json(err)
                })
    },

    addThought({ params, body }, res){
        Thoughts.create(body)
            .then(({ _id }) => {
                return Users.findOneAndUpdate(
                    { _id: params.pizzaId },
                    { $push: { thoughts: _id}},
                    { new: true }
                );
            })
            .then(dbUser => {
                if(!dbUser){
                    res.status(404).json({ message: "No user found with this id!"})
                return;
                }
                res.json(dbUser)
            })
            .catch(err => res.status(400).json(err))
    },

    updateThoughtById({ params, body }, res){
        Thoughts.findOneAndUpdate(
            { _id: params.id },
            body, { new: true }
            )
                .then(dbThought => {
                    if(!dbThought){
                        res.status(404).json({ message: 'No thought found with this id'})
                    return;
                    }
                res.json(dbThought)
                })
                .catch(err => {
                    console.log(err);
                    res.status(400).json(err)
                })
    },  
    deleteThought({ params }, res){
        Thoughts.findOneAndDelete({ _id: params.id })
            .then(dbThought => {
                if(!dbThought){
                    res.status(404).json({ message: 'No thought found with this id'})
                return;
                }
                res.json(dbThought)
            })
            .catch(err => res.status(400).json(err))
    }
}

module.exports = thoughtsController