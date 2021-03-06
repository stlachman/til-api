const express = require("express");
const server = express();
const cors = require("cors");

server.use(express.json());
server.use(cors());

const authRouter = require("../auth/auth-router");
const notesRouter = require("../notes/notes-router");
const usersRouter = require("../users/users-router");

server.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

server.use("/api", authRouter);
server.use("/api/notes", notesRouter);
server.use("/api/users", usersRouter);

module.exports = server;
