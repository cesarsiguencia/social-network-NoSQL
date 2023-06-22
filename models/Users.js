const { Schema, model } = require('mongoose')

var emailValidation = function (email) {
    var accepted = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return accepted.test(email)
};

const UsersSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true

        },
        email: {
            type: String,
            unique: true,
            required: true,
            validate: [emailValidation, 'Email required!'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Email required!']
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thoughts'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Users',
                unique: true
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
)

UsersSchema.virtual('friendCount').get(function () {

    if (this.friends === undefined) {
        return
    }

    if (this.friends.length) {
        return this.friends.length
    }
})

const Users = model('Users', UsersSchema)

module.exports = Users