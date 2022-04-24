const { Schema , model , Types } = require('mongoose')

const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,

    },
    username: {
        type: String,


    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
          
    },

})

const ThoughtsSchema = new Schema({
    thoughtText: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
          
    },
    username: [
        {
        type: String,
        ref: 'users'
        }
    ],
    reactions: [ReactionSchema]
})

const Thoughts = model('thoughts', ThoughtsSchema)

ThoughtsSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });

module.exports = Thoughts