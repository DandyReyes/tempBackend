const express = require('express');

const app = express();
const router = express.Router();

app.use('/', (req, res) => {
  router.get('/all', async () => {
    try {
      const allUsers = {
        firstName: 'dandy',
        lastName: 'reyes',
      };
      return res.send(allUsers);
    } catch (err) {
      res.send(err);
    }
  });
});

app.listen(5000, () => {
  console.log('running server on port 5000');
});
