require("dotenv").config(); 
const { PORT, PASSWORD } = process.env;
const morgan = require("morgan");
const cors = require("cors");
// Routers
const characterRouter = require("./routes/character");
const userRouter = require("./routes/user");
const favoriteRouter = require("./routes/favorites");
// Express
const express = require("express");
const server = express();


server.use(express.json()); 
server.use(morgan("dev")); 


server.use(cors()); 


server.use("/character", characterRouter);
server.use("/user", userRouter);
server.use("/favorites", favoriteRouter);

server.get("/health-check", (req, res) => {
  res.send("Working");
});

server.listen(PORT, () => {
  console.log("Server raised in port: " + PORT);
});
