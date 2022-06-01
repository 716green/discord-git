const express = require("express");
const app = express();
const port = 3000;

app.get("/", (_req, res) => {
  res.json({ hello: "world!" });
});

app.get("/person", (_req, res) => {
  res.json({
    name: "Bob",
    age: 31,
    employed: false,
  });
});

app.get("/third", (_req, res) => {
  res.json({
    name: "Sam",
    age: 22,
    employed: false,
  });
});

app.get("/personA", (_req, res) => {
  res.json({
    name: "Terrence",
    age: 50,
    employed: true,
  });
});

app.listen(port, () => console.log(`listening at http://localhost:${port}`));
