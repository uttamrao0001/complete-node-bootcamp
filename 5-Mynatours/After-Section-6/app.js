const express = require("express");
const app = express();

app.get("/", (req, res) => {
  //res.status(200).send("Hello from the server side!");
  res
    .status(200)
    .json({ Message: "Hello from the server side!", app: "natours" });
});

app.post("/", (req, res) => {
  //res.status(200).send("Hello from the server side!");
  res.send("Post Routing!");
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

//console.log(require("module").wrapper);
