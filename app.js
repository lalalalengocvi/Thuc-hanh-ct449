const express = require("express");
const cors = require("cors");
//const setupContactRoutes = require("./app/routes/contact.routes");
const app = express();

//const PORT = process.env.PORT || 8080;

//const {BadRequestError, errorHandler} = require("./app/errors");
//const app = express();
app.use(cors());

app.use(express.json());

//app.use(express.urlencoded({ extended: true}));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to contac book application." });
});

//setupContactRoutes(app);
//app.use((req, res, next) => {
  //  next(new BadRequestError(404, "Resourve not found"));
//});

//app.use((err, req, res, next) => {
  //  errorHandler.handleError(erros, res);
//});

//app.listen(PORT, () => {
   // console.log(`Server is runging on port &{PORT}`);
//});
module.exports = app;
