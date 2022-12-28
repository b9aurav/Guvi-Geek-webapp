const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h6>Hello GUVI GEEK</h6>');
});

app.listen(8000, () => {
  console.log('Server listening on port 8000');
});
