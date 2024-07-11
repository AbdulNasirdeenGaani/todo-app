// module imports
const express = require("express");

// variables
const app = express();
const PORT = 5000;

// api end-points
app.get("/", (req, res) => {
  res.send("simple todo-app");
});

// app listening
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
