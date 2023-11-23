const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/users.controller.js");

router.route("/users").get(UsersController.getUsers);
router.route("/users").post(UsersController.createUser);
router.route("/users").put(UsersController.updateUser);
 
module.exports = router;
