const express = require('express');
const routes = require('./meta.routes');

const app = express();

app.use(express.json());
app.use('/', routes);

app.listen(5000, () => {
  console.log('running server on port 5000');
});
