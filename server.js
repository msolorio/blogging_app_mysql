require('dotenv').config();
const express = require('express');
const db = require('./models');
const authorRouter = require('./routes/authorRouter');
const postRouter = require('./routes/postRouter');
const categoryRouter = require('./routes/categoryRouter');
const tagRouter = require('./routes/tagRouter');

const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/authors', authorRouter);
app.use('/posts', postRouter);
app.use('/categories', categoryRouter);
app.use('/tags', tagRouter);

async function init() {
  await db.sequelize.sync();

  app.listen(PORT, () => {
    console.log(`Your server is running on port: ${PORT}. You better go and catch it...`);
  });
}

init();
