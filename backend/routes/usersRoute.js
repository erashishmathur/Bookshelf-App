const express = require("express");
const asynHandler = require("express-async-handler");
const User = require("../models/User");
const generateToken = require("../utils/generateTokens");
const expressAsyncHandler = require("express-async-handler");
const authMiddleware = require("../middleware/authMiddleware");

const usersRoute = express.Router();

//Register
usersRoute.post(
  "/register",
  asynHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email: email });
    if (userExists) {
      throw new Error("User Exist");
    }
    const userCreated = await User.create({ email, name, password });

    res.json({
      _id: userCreated.id,
      name: userCreated.name,
      password: userCreated.password,
      email: userCreated.password,
      token: generateToken(userCreated._id),
    });
  })
);

//Login
usersRoute.post(
  "/login",
  expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.isPasswordMatch(password))) {
      //set status code
      res.status(200);

      res.json({
        _id: user._id,
        name: user.name,
        password: user.password,
        email: user.password,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error("Invalid Credentials");
    }
  })
);

//update user
usersRoute.put(
  "/profile/update",
  authMiddleware,
  expressAsyncHandler(async (req, res) => {
    //Find the login user by ID
    const user = await User.findById(req.user._id);

    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      if (req.body.password) {
        user.password = req.body.password || user.password;
      }
      const updatedUser = await user.save();

      res.json({
        _id: updatedUser_id,
        name: updatedUser.name,
        password: updatedUser.password,
        email: updatedUser.password,
        token: generateToken(updatedUser._id),
      });
    }
  })
);

//Delete User
usersRoute.delete("/:id", (req, res) => {
  res.send("Delete route");
});

//Fetch users
usersRoute.get(
  "/",
  authMiddleware,
  expressAsyncHandler(async (req, res) => {
    const users = await User.find({});

    if (users) {
      res.status(200).json(users);
    } else {
      res.status(500);

      throw new Error("No users found at the moment");
    }
  })
);

// Profile route
usersRoute.get(
  "/profile",
  authMiddleware,
  expressAsyncHandler(async (req, res) => {
    try {
      const user = await User.findById(req.user._id).populate("books");

      if (!user) throw new Error("You don't have any profile yet");

      res.status(200);
      res.send(user);
    } catch (error) {
      res.status(500);
      throw new Error("Server Error");
    }
  })
);
module.exports = usersRoute;
