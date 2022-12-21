console.log("hello server ");
const app = require("express")();
const port = process.env.port || 8080;

app.listen(port, () => console.log("server run"));
