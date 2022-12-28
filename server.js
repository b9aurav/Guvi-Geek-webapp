const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h2>Hello GUVI GEEK</h2>');
});

app.listen(8000, () => {
  console.log('Server listening on port 8000');
});
