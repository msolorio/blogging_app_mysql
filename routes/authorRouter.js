const express = require("express");
const authorRouter = express.Router();
const db = require("../models");

// GET ALL AUTHORS
authorRouter.get("/", async (request, response) => {
  const allAuthors = await db.Author.findAll({});  

  response.json({allAuthors});
});

module.exports = authorRouter;
