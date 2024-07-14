import app from "./App.js";

const port = process.env.PORT || 5000;

// app listening
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
