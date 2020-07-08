const express = require('express');

const authorRouter = express.Router();
const db = require('../models');
const getUpdateObject = require('../utils/getUpdateObject');

// GET ALL AUTHORS
authorRouter.get('/', async (request, response) => {
  const allAuthors = await db.Author.findAll({});

  response.json({ allAuthors });
});

// GET AUTHOR BY ID
authorRouter.get('/:authorId', async (request, response) => {
  const authorById = await db.Author.findOne({ where: { id: request.params.authorId } });

  response.json({ authorById });
});

// ADD AN AUTHOR
authorRouter.post('/', async (request, response) => {
  const addedAuthor = await db.Author.create({
    first_name: request.body.first_name,
    last_name: request.body.last_name
  });

  response.status(201).json({ addedAuthor });
});

// UPDATE AUTHOR BY ID
authorRouter.put('/:authorId', async (request, response) => {
  const paramsToCheck = ['firstName', 'lastName'];
  const updateObject = getUpdateObject(request.body, paramsToCheck);

  await db.Author.update(updateObject, {
    where: { id: request.params.authorId }
  });

  response.status(200).end();
});

// DELETE AUTHOR BY ID
authorRouter.delete('/:authorId', async (request, response) => {
  await db.Author.destroy({ where: { id: request.params.authorId } });

  response.status(200).end();
});

module.exports = authorRouter;
