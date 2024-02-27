const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const Book = require("../models/Book");
const authMiddleware = require("../middleware/authMiddleware");

const bookRouter = express.Router();

//Create Book
bookRouter.post(
  "/",
  authMiddleware,
  expressAsyncHandler(async (req, res) => {
    // Grab the user from the req.user

    const userId = req.user._id;

    const book = await Book.create({
      title: req.body.title,
      category: req.body.category,
      createdBy: userId,
      author: req.body.author,
    });

    if (book) {
      res.status(200);
      res.json(book);
    } else {
      res.status(500);
      throw new Error("Book creating failed");
    }
  })
);

bookRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const book = await Book.find({});

    if (book) {
      res.status(200);
      res.json(book);
    } else {
      res.status(500);
      throw new Error("There are no books");
    }
  })
);

// Update book
bookRouter.put(
  "/:id",
  authMiddleware,
  expressAsyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.id);

    if (book) {
      const updatedBook = await Book.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );
      res.status(200);
      res.json(updatedBook);
    } else {
      res.status(500);
      throw new Error("Update failed");
    }
  })
);

// Delete book
bookRouter.delete(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    try {
      const book = await Book.findByIdAndDelete(req.params.id);

      res.status(200);
      res.send(book);
    } catch (error) {
      res.json(error);
    }
  })
);
module.exports = bookRouter;
