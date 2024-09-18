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

app.get('/', function(req, res) {
  res.send('Runing api swept!')
});

require('./routes/auth.routes')(app);

app.listen(PORT, ()=> {
  console.log(`Server is running on port ${PORT}!`);
});
