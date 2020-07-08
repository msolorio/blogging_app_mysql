require('dotenv').config();
const express = require('express');
const db = require('./models');
const authorRouter = require('./routes/authorRouter');
const postRouter = require('./routes/postRouter');

const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/author', authorRouter);
app.use('/post', postRouter);

async function init() {
  await db.sequelize.sync();

  app.listen(PORT, () => {
    console.log(`Your server is running on port: ${PORT}. You better go and catch it...`);
  });
}

init();
