const db = require("../data/dbConfig");

module.exports = {
  add,
  find,
  findUser,
  findById
};

async function add(user) {
  const [userId] = await db("users").insert(user, "id");
  return findById(userId);
}

function findUser(username) {
  return db("users").where(username);
}

function find() {
  return db("users");
}

function findById() {
  return db("users")
    .where({ id })
    .first();
}
