const db = require("../config/db");

exports.register = (req, res) => {
  res.status(200).json(req.body);
};

exports.login = (req, res) => {
  const { password } = req.body;

  if (password === "password") {
    res.status(200).json(req.body);
  } else {
    res.status(400).json({ message: "Incorrect password" });
  }
};
