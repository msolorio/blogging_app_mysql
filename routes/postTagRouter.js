const express = require('express');

const postTagRouter = express.Router({ mergeParams: true });
const db = require('../models');
// const getUpdateObject = require('../utils/getUpdateObject');

// ADD A TAG TO A POST
postTagRouter.post('/:tagId', async (request, response) => {
  const addedTag = await db.Tag_Post.create({
    TagId: request.params.tagId,
    PostId: request.params.postId
  });

  response.json({ addedTag });
});

// REMOVE A TAG FOR A PARTICULAR POST
postTagRouter.delete('/:tagId', async (request, response) => {
  await db.Tag_Post.destroy({
    where: {
      TagId: request.params.tagId,
      PostId: request.params.postId
    }
  });

  response.status(200).end();
});

module.exports = postTagRouter;
