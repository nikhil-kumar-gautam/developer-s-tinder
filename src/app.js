// const express = require('express');

// const app = express();

// app.use((req,res) => {
//     res.send('Heorld!');
// })

// app.listen(3000, () => {
//     console.log('Listening on port 3000');
// });

const express = require("express");

const app = express();

app.use("/hello", (req, res) => {
  res.send("Hello World!");
});

app.use("/test", (req, res) => {
  res.send("testing successful");
});

app.use("/", (req, res) => {
  res.send("testing successful");
});

app.listen(7777, () => {
  console.log("Listening on port 7777");
});
