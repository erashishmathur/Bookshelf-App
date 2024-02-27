/**@format */
const express = require("express");
const dotenv = require("dotenv");
const error = require("./middleware/errorMiddlewareHandler");
const usersRoute = require("./routes/usersRoute");
const {
  errorMiddlewareHandler,
} = require("./middleware/errorMiddlewareHandler");
const bookRouter = require("./routes/bookRoute");

//dotenv configuration
dotenv.config();
require("./config/dbConnect")();
//Express
const app = express();

//Passing body data
app.use(express.json());

//Routes
//Users
app.use("/api/users", usersRoute);

//Book
app.use("/api/books", bookRouter);
// console.log(process.env.MY_NAME);
//Error middleware
app.use(error.errorMiddlewareHandler);
//Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is up and running ${PORT}`);
});

// ashish
// 9IltKAG37dKhp4XQ
//aNzSt8llKqSYdEgQ
