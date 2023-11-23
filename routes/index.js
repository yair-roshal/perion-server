const express = require("express");
const router = express.Router(); 
const usersRoutes = require("./users.routes");

router.use("/", usersRoutes); 

module.exports = router;
