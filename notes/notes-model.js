const db = require("../data/dbConfig");

module.exports = {
  add,
  find,
  findNote,
  findById
};

function find() {
  return db("notes");
}

function findNote(title) {
  return db("notes").where(title);
}

async function add(note) {
  const [noteId] = await db("notes").insert(note);
  return findById(noteId);
}

function findById(id) {
  return db("notes")
    .where({ id })
    .first();
}
