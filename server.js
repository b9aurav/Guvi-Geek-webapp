const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h3>Hello GUVI GEEK</h3>');
});

app.listen(8000, () => {
  console.log('Server listening on port 8000');
});
