const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', function(req, res) {
  res.send('Runing api swept!')
})
app.listen(8080, ()=> {
  console.log(`Server is running on port ${PORT}!`);
});
