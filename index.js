require('dotenv').config();
const express = require("express");
const morgan = require('morgan');
const mongoose = require('mongoose');

const userRouter = require('./router/user');
const server = express();

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/mydb');
}

/*******************************MIDDLEWARE******************************************/
server.use(express.json()); //body parser
server.use('/users',userRouter.router);
// server.use(express.urlencoded()) // url parser jaisa kuch hai!

// server.use(morgan('default'));
server.use(express.static(process.env.PUBLIC_DIR));
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

server.listen(process.env.PORT, () => {
});