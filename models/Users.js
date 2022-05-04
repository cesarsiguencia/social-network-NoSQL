const { Schema , model } = require('mongoose')

var emailValidation = function(email) {
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
        // friends: {
        //     type: ObjectId,
        //     ref: [this]
        // } 
    },
    {
        toJSON: {
            virtuals: true
        }
    }
)

// UsersSchema.virtual('friendCount').get(function(){
//     return this.friends.length
//     // reduce((total, comment) => total + friends.)
// })

const Users = model('Users', UsersSchema)

module.exports = Users