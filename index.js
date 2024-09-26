const express = require("express");

const morgan = require('morgan');
const fs = require("fs");

const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const users = data.users;
const index = fs.readFileSync("index.html", "utf-8");

const server = express();
/*******************************MIDDLEWARE******************************************/
server.use(express.json()); //body parser
// server.use(express.urlencoded()) // url parser jaisa kuch hai!

// server.use(morgan('default'));
server.use(express.static("public"));
// server.use((req, res, next) => { //application middleware which covers whole application
//   console.log(
//     req.method,
//     req.ip,
//     req.hostname,
//     req.get("User-agent"),
//     new Date()
//   );
//   next();
// });



const auth = (req, res, next) => { //Route Middle ware which can be passed as a  parameter to the function during routing
  console.log(req.body);
  if (req.body.password == "234") {
    next();
  } else {
    res.sendStatus(401);
  }
};

/*********API*********ENDPOINT*************ROUTE*********************** */

 //POST API - CREATE API
 server.post("/users", (req, res) => {
    console.log(req.body);
    users.push(req.body);
  res.json(req.body);
});


//GET USERS - READ API
server.get("/", (req, res) => {
  // res.sendStatus(404);
  // res.json(product);
  // res.status(201).send("Sumit Singh");
  res.json({ type: "GET" });
});

server.get("/users",(req,res)=>{
    res.json(users);
})
server.get("/users/:id",(req, res) => {
    //console.log(req.params); // it reads the parametes passed in the url.
    const id = +req.params.id;
    const user = users.find(u=>u.id===id);
    res.json(user);
  });

  //UPDATE API - PUT API
  server.put("/users/:id",(req, res) => {
    //console.log(req.params); // it reads the parametes passed in the url.
    const id = +req.params.id;
    const userIndex = users.findIndex(u=>u.id===id);
    users.splice(userIndex,1,{...req.body, id:id})
    res.status(201).json({"name": "shuham"});
  });

  //UPDATE API - PATCH API
  server.patch("/users/:id",(req, res) => {
    //console.log(req.params); // it reads the parametes passed in the url.
    const id = +req.params.id;
    const userIndex = users.findIndex(u=>u.id===id);
    users.splice(userIndex,1,{...users[userIndex],...req.body})
    res.status(201).json();
  });

  //DELETE API - DELETE API
  server.delete("/users/:id",(req, res) => {
    //console.log(req.params); // it reads the parametes passed in the url.
    const id = +req.params.id;
    const userIndex = users.findIndex(u=>u.id===id);
    const user = users[userIndex];
    users.splice(userIndex,1);
    res.status(201).json(user);
  });


server.delete("/", (req, res) => {
  res.json({ type: "DELETE" });
});

server.patch("/", (req, res) => {
  res.json({ type: "PATCH" });
});

server.listen(8080, () => {
  console.log("Server Started");
});
