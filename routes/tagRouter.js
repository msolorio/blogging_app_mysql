const express = require('express');

const tagRouter = express.Router();
const db = require('../models');
const getUpdateObject = require('../utils/getUpdateObject');

// GET ALL TAGSS
tagRouter.get('/', async (request, response) => {
  const allTags = await db.Tag.findAll({});

  response.json({ allTags });
});

// ADD A TAGS
tagRouter.post('/', async (request, response) => {
  const addedTag = await db.Tag.create({
    name: request.body.name
  });

  response.status(201).json({ addedTag });
});

// UPDATE TAGS BY ID
tagRouter.put('/:tagId', async (request, response) => {
  const paramsToCheck = ['name'];
  const updateObject = getUpdateObject(request.body, paramsToCheck);

  await db.Tag.update(updateObject, {
    where: { id: request.params.tagId }
  });

  response.status(200).end();
});

// DELETE TAGS BY ID
tagRouter.delete('/:tagId', async (request, response) => {
  await db.Tag.destroy({ where: { id: request.params.tagId } });

  response.status(200).end();
});

module.exports = tagRouter;
