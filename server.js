const express = require('express');
const cors = require('cors');
const router = require('./meta.routes');

const app = express();

app.use(cors());
app.use('/', router);

app.listen(process.env.PORT || 5000, () => {
  console.log('running server on port 5000');
});
