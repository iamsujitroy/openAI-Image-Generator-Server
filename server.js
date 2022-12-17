const express = require("express");
const app = express();
var cors = require('cors')



require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  app.use(cors())
  app.use(express.json());
  app.use(express.urlencoded({extended:false}))// Enable body parser

  app.use("/", require("./Routers/openaiRoutes"));
  app.get("/", (req, res)=> res.send("server running..."))

  console.log(`Server is running on PORT: ${PORT}`);
});
