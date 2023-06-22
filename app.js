const { request, response } = require("express");
const path = require(`path`);
const express = require(`express`);
const app = express();
const port = process.env.PORT || 3030;

app.listen(port,() => console.log("la pagina esta funcionando en localhost:" + port));

app.use(express.static(`Public`));
/*app.use(express.static(path.resolve(__dirname,'../public')))*/

app.get("/", (request, response) => response.sendFile(path.resolve(__dirname, "./views/home.html")));
app.get("login", (request, response) => response.sendFile(path.resolve(__dirname, "./views/login.html")));
app.get("/register", (request, response) => response.sendFile(path.resolve(__dirname, "./views/register.html")));
