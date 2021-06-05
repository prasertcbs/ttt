const express = require('express');
const app = express();
require('dotenv').config();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT || 5000, (err) => {
  console.log(`listening on ${process.env.PORT}`);
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
