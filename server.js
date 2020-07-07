require('dotenv').config();
const express = require('express');
const db = require('./models');

const app = express();
const { PORT } = process.env;

const authorRouter = require('./routes/authorRouter');

app.use('/author', authorRouter);

async function init() {
  await db.sequelize.sync();

  app.listen(PORT, () => {
    console.log(`Your server is running on port: ${PORT}. You better go and catch it...`);
  });
}

init();
