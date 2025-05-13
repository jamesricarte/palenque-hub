const db = require("../config/db");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  const registersData = req.body;

  if (
    Object.values(registersData).includes("") ||
    Object.values(registersData).includes(null) ||
    Object.values(registersData).includes(undefined)
  ) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  if (registersData.password !== registersData.confirmPassword) {
    return res
      .status(400)
      .json({ message: "Your confirmation password does not match." });
  }

  // if (
  //   !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
  //     registersData.password
  //   )
  // ) {
  //   return res.status(400).json({
  //     message:
  //       "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.",
  //   });
  // }

  try {
    const hashedPassword = await bcrypt.hash(registersData.password, 10);

    const [rows] = await db.execute(
      "INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)",
      [
        registersData.firstName,
        registersData.lastName,
        registersData.email,
        hashedPassword,
      ]
    );
    console.log("Registered succesfully!");
    res.status(200).json({ message: "Registered succesfully!" });
  } catch (error) {
    console.error(error.message);

    const errorMessage = error.message.startsWith("Duplicate entry")
      ? "Email was already registered."
      : error.message;
    res.status(400).json({ message: errorMessage });
  }
};

exports.login = async (req, res) => {
  const loginData = req.body;

  if (
    Object.values(loginData).includes("") ||
    Object.values(loginData).includes(null) ||
    Object.values(loginData).includes(undefined)
  ) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  try {
    const [rows] = await db.execute("SELECT * FROM users WHERE email = ?", [
      loginData.email,
    ]);
    if (rows.length === 0) {
      res.status(400).json({ message: "Invalid credentials." });
    } else {
      const [rows] = await db.execute(
        "SELECT password FROM users WHERE email = ?",
        [loginData.email]
      );

      const password = rows[0].password;

      const passwordMatch = await bcrypt.compare(loginData.password, password);

      if (passwordMatch) {
        console.log("Login successfully!");
        res.status(200).json({ message: "Login successfully!" });
      } else {
        res.status(400).json({ message: "Incorrect password." });
      }
    }
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: error.message });
  }
};
