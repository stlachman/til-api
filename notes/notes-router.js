const router = require("express").Router();

const Notes = require("./notes-model");

// Create Note
router.post("/", validateNote, (req, res) => {
  const note = req.body;
  Notes.add(note)
    .then(newPost => {
      res.status(201).json(newPost);
    })
    .catch(err => {
      res.status(500).json({ message: "Error creating note" });
    });
});

// GET All Notes
router.get("/", (req, res) => {
  Notes.find()
    .then(notes => {
      res.status(200).json(notes);
    })
    .catch(error => {
      res.status(500).json({ message: "Error retrieving notes" });
    });
});

function validateNote(req, res, next) {
  const note = req.body;
  if (note && note.title && note.description && note.user_id) {
    next();
  } else {
    res
      .status(400)
      .json({ message: "You must include a name, description, and user id" });
  }
}

module.exports = router;
