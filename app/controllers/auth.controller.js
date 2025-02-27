const db = require('../models')
const config = require('../config/auth.config')

const User = db.user
const Role = db.role

const Op = db.Sequelize.Op

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.signin = async (req, res) => {

  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    })

    if (!user) {
      return res.status(404).send({ message: 'User Not found.' })
    }

    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    )

    if (!passwordIsValid) {
      return res.status(401).send({
        message: 'Invalid Password!',
      })
    }

    const token = jwt.sign({ id: user.id },
      config.secret,
      {
      algorithm: 'HS256',
      allowInsecureKeySizes: true,
      expiresIn: 86400, // 24 hours
      })

    req.session.token = token

    return res.status(200).send({
      id: user.id,
      username: user.username,
      email: user.email
    })
  } catch (error) {
    return res.status(500).send({ message: error.message })
  }
}

exports.signup = async (req, res) => {

  // Save User to Database
  try {
    const user = await User.create({
      username: req.body.email,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    })

    res.send({ message: 'User registered successfully!' })


  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

exports.signout = async (req, res) => {
  try {
    req.session = null;
    return res.status(200).send({
      message: "You've been signed out!"
    });
  } catch (err) {
    this.next(err);
  }
};