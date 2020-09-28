require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT;

const server = http.createServer(app);
server.listen(PORT);
