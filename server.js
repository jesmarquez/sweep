const express = require('express');
const cookieSession = require('cookie-session');

const app = express();
const PORT = process.env.PORT || 8081;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "bezkoder-session",
    keys: ["COOKIE_SECRET"], // should use as secret environment variable
    httpOnly: true,
    sameSite: 'strict'
  })
);

// database
const db = require("./app/models");
db.sequelize.sync().then(() => {
  console.log('DB running!');
});

app.get('/', function(req, res) {
  res.send('Runing api swept!')
});

require('./app/routes/auth.routes')(app);

app.listen(PORT, ()=> {
  console.log(`Server is running on port ${PORT}!`);
});
