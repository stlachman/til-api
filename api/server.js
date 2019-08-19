const express = require("express");
const server = express();
const cors = require("cors");

server.use(express.json());
server.use(cors());

const notesRouter = require("../notes/notesRouter");

server.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

server.use("/api/notes", notesRouter);

module.exports = server;
