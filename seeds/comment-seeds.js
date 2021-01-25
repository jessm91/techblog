const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "Wow, very interesting!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Great job!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Spectacular work!"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "I can't wait to read more."
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "Can't wait to learn more on this topic!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "Very useful information!"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "This is so cool!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Awesome work to everyone involved!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;