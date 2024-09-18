module.exports = function (app) {
  app.post(
    "/api/auth/signin", (req, res) => {
      const user = req.body;
      console.log(user);

      if (user.username === 'jesmqz' && user.password === '123456') {
        return res.status(200).send({
          id: 900,
          username: user.username,
          email: 'jesmqz@gmail.com'
        })
      } else {
        res.status(500).send({ message: 'User not exist or password does not match!'})
      }
    }
  )
}