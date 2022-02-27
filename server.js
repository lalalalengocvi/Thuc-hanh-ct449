const app = require("./app");
const config = require("./app/config");

//const setupContactRoutes = require("./app/routes/contact.routes");
//setupContactRoutes(app);

//start server
const  PORT = config.app.port;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
//module.exports = app;