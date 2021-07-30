const { User } = require('../models');

const userData = [
  {
    username: "Cassie",
    email: "cassie@mail.com",
    password: "password1234"
  },
  {
    username: "Josh",
    email: "josh@mail.com",
    password: "password1234"
  },
  {
    username: "Steven",
    email: "steven@mail.com",
    password: "password1234"
  },
  {
    username: "Emily",
    email: "emily@mail.com",
    password: "password1234"
  },
  {
    username: "John",
    email: "john@mail.com",
    password: "password1234"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
