const { User } = require('../models');

const userData = [
    {
        username: "alex_smith",
        email: "alexs@yahoo.com",
        password: "alex!5"
    },
    {
        username: "emslovessoccer",
        email: "emilyj66@gmail.com",
        password: "password@3"
    },
    {
        username: "beachgirl",
        email: "westcoast99@yahoo.com",
        password: "beachgirl!2"
    },
    {
        username: "clark",
        email: "clarkp4532@gmail.com",
        password: "today!2"
    },
    {
        username: "samjem",
        email: "sammyjemmy@gmail.com",
        password: "love9!"
    },
    {
        username: "staci",
        email: "staciwillow@gmail.com",
        password: "staci9@"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;