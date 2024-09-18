const express = require('express');

const app = express();
const PORT = process.env.PORT || 8081;

app.get('/', function(req, res) {
  res.send('Runing api swept!')
});

require('./routes/auth.routes')(app);

app.listen(PORT, ()=> {
  console.log(`Server is running on port ${PORT}!`);
});
