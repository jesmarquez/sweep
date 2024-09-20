const db = require("../models");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

const bcrypt = require("bcryptjs");


exports.signin = async (req, res) => {

  const user = req.body;
  console.log(user);

  if (user.username === 'jesmqz' && user.password === '123456') {
    return res.status(200).send({
      id: 900,
      username: user.username,
      email: 'jesmqz@gmail.com'
    })
  } else {
    res.status(401).send({ message: 'User not exist or password does not match!'})
  }
}

exports.signup = async (req, res) => {

  // Save User to Database
  try {
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    });

    res.send({ message: "User registered successfully!" });


  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}