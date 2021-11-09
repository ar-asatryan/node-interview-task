const db = require("../models/index.js");
const users = db.users;

// Retreive the all Users :
exports.findAll = (req, res) => {
        try{
          res.json(users);
        } catch (err) {
          res.status(500).json({ message: err.message })
        }
};

// Retreive only one User by username:
exports.findOne = (req, res) => {
        try{
          res.send(req.params.username);
        } catch (err) {
          res.status(500).json({ message: err.message })
        }
};

