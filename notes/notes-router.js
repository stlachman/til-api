const router = require("express").Router();

const Notes = require("./notes-model");

// Create Note
router.post("/", (req, res) => {
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

module.exports = router;
