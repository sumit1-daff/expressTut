const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const users = data.users;

const index = fs.readFileSync("index.html", "utf-8");
exports.replaceUser = (req, res) => {
    //console.log(req.params); // it reads the parametes passed in the url.
    const id = +req.params.id;
    const userIndex = users.findIndex(u=>u.id===id);
    users.splice(userIndex,1,{...req.body, id:id})
    res.status(201).json({"name": "shuham"});
  }

  exports.updateUser = (req, res) => {
    //console.log(req.params); // it reads the parametes passed in the url.
    const id = +req.params.id;
    const userIndex = users.findIndex(u=>u.id===id);
    users.splice(userIndex,1,{...users[userIndex],...req.body})
    res.status(201).json();
  }

  exports.deleteUser = (req, res) => {
    //console.log(req.params); // it reads the parametes passed in the url.
    const id = +req.params.id;
    const userIndex = users.findIndex(u=>u.id===id);
    const user = users[userIndex];
    users.splice(userIndex,1);
    res.status(201).json(user);
  }

  exports.getUser = (req, res) => {
    //console.log(req.params); // it reads the parametes passed in the url.
    const id = +req.params.id;
    const user = users.find(u=>u.id===id);
    res.json(user);
  }

  exports.getAllUsers = (req,res)=>{
    res.json(users);
}

exports.addUser = (req, res) => {
    console.log(req.body);
    users.push(req.body);
  res.json(req.body);
}