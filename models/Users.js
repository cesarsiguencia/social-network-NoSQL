const { Schema , model } = require('mongoose')

const UsersSchema = new Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    thoughts: [
        {
        type: Schema, Types, ObjectId,
        ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema, Types, ObjectId,
            ref: UsersSchema
        }
    ]
})

const Users = model('users', CommentSchema)

module.exports = Users

