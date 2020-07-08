const express = require('express');

const categoryRouter = express.Router();
const db = require('../models');
const getUpdateObject = require('../utils/getUpdateObject');

// GET ALL CATEGORIES
categoryRouter.get('/', async (request, response) => {
  const allCategories = await db.Category.findAll({});

  response.json({ allCategories });
});

// ADD A CATEGORY
categoryRouter.post('/', async (request, response) => {
  const addedCategory = await db.Category.create({
    name: request.body.name
  });

  response.status(201).json({ addedCategory });
});

// UPDATE CATEGORY BY ID
categoryRouter.put('/:categoryId', async (request, response) => {
  const paramsToCheck = ['name'];
  const updateObject = getUpdateObject(request.body, paramsToCheck);

  await db.Category.update(updateObject, {
    where: { id: request.params.categoryId }
  });

  response.status(200).end();
});

// DELETE CATEGORY BY ID
categoryRouter.delete('/:categoryId', async (request, response) => {
  await db.Category.destroy({ where: { id: request.params.categoryId } });

  response.status(200).end();
});

module.exports = categoryRouter;
