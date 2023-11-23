require("rootpath")();
require("dotenv").config();

const express = require("express");
const https = require("https");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/index");
const { httpsOptions, corsOptions } = require("./constants/config");
const PORT = process.env.PORT;

// Adjust the limits for incoming requests
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

app.use(cors(corsOptions));

app.use("/", routes);

https.createServer(httpsOptions, app).listen(PORT, () => {
  console.log("https Web server started at port : ", PORT);
});
