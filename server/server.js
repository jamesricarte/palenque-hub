const express = require("express");
const db = require("./config/db");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);

const port = process.env.PORT;

const server = app.listen(port, () => {
  const { address, port } = server.address();
  console.log(
    `Server is running at http://${
      address === "::" ? "localhost" : address
    }:${port}`
  );
});
