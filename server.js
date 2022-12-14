const express = require("express");
const app = express();



require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  app.use(express.json());
  app.use(express.urlencoded({extended:false}))// Enable body parser

  app.use("/", require("./Routers/openaiRoutes"));

  console.log(`Server is running on PORT: ${PORT}`);
});
