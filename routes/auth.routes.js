module.exports = function (app) {
  app.post(
    "/api/auth/signin", (req, res) => {
      console.log(req.body);
      res.send('sign in!');
    }
  )
}