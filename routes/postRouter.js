const express = require('express');

const postRouter = express.Router();
const db = require('../models');
const getUpdateObject = require('../utils/getUpdateObject');

// GET 10 MOST RECENT POSTS
postRouter.get('/', async (request, response) => {
  const queryObject = {
    limit: 10,
    order: [['createdAt', 'DESC']],
    include: [{
      model: db.Author,
      attributes: ['firstName', 'lastName']
    },
    {
      model: db.Category,
      attributes: ['name']
    }],
    where: {}
  };

  if (request.query.CategoryId) queryObject.where.CategoryId = request.query.CategoryId;
  if (request.query.AuthorId) queryObject.where.AuthorId = request.query.AuthorId;

  const mostRecentPosts = await db.Post.findAll(queryObject);

  response.status(200).json({ mostRecentPosts });
});

// ADD A POST
postRouter.post('/', async (request, response) => {
  const addedPost = await db.Post.create({
    title: request.body.title,
    content: request.body.content,
    AuthorId: request.body.AuthorId
  });

  response.status(201).json({ addedPost });
});

// UPDATE A POST BY ID
postRouter.put('/:postId', async (request, response) => {
  const paramsToCheck = ['title', 'content', 'AuthorId'];
  const updateObject = getUpdateObject(request.body, paramsToCheck);

  await db.Post.update(updateObject, { where: { id: request.params.postId } });

  response.status(200).end();
});

// DELETE A POST BY ID
postRouter.delete('/', async (request, response) => {
  await db.Post.destroy({ where: { id: request.body.id } });

  response.status(200).end();
});

module.exports = postRouter;
