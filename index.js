const express = require("express");

const fs = require("fs");

const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const product = data.product;
const index = fs.readFileSync("index.html", "utf-8");

const server = express();

/*******************************MIDDLEWARE******************************************/
server.use(express.json()); //body parser
server.use(express.urlencoded()) // url parser jaisa kuch hai!

server.use(express.static("public"));
server.use((req, res, next) => {
  console.log(
    req.method,
    req.ip,
    req.hostname,
    req.get("User-agent"),
    new Date()
  );
  next();
});

const auth = (req, res, next) => {
  console.log(req.body);
  if (req.body.password == "234") {
    next();
  } else {
    res.sendStatus(401);
  }
};

/*********API*********ENDPOINT*************ROUTE*********************** */
server.get("/", auth, (req, res) => {
  // res.sendStatus(404);
  // res.json(product);
  // res.status(201).send("Sumit Singh");
  res.json({ type: "GET" });
});

server.post("/", (req, res) => {
  res.json({ type: "POST" });
});

server.delete("/", (req, res) => {
  res.json({ type: "DELETE" });
});

server.patch("/", (req, res) => {
  res.json({ type: "PATCH" });
});

server.put("/", (req, res) => {
  res.json({ type: "PUT" });
});

server.listen(8080, () => {
  console.log("Server Started");
});
