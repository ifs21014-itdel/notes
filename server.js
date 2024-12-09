const express = require('express');
const dotenv = require('dotenv');
const noteRoutes = require('./src/routes/noteRoutes');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use('/api', noteRoutes);

const port = process.env.APP_PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
