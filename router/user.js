const express = require("express");
const router = express.Router();
const userController = require('../controller/user.js');

/*********API*********ENDPOINT*************ROUTE*********************** */
 //POST API - CREATE API
 router.post("/", userController.addUser);
//GET USERS - READ API
// router.get("/", (req, res) => {
//   // res.sendStatus(404);
//   // res.json(product);
//   // res.status(201).send("Sumit Singh");
//   res.json({ type: "GET" });
// });
router.get("/",userController.getAllUsers);

router.get("/:id",userController.getUser);

  //UPDATE API - PUT API
router.put("/:id",userController.replaceUser);

  //UPDATE API - PATCH API

router.patch("/:id",userController.updateUser);

  //DELETE API - DELETE API
 
router.delete("/:id", userController.deleteUser);

  exports.router = router;