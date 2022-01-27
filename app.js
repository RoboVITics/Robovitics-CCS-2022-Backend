const express = require("express");
const app = express();
const http = require("http");
const PORT = 4000 || process.env.PORT
const cors = require("cors");
const db = require("./Config/Database");
const dotenv = require("dotenv");
dotenv.config();


app.use(express.json());
app.use(cors());
db();

app.get('/connection', (req, res) => {
    res.sendStatus(200);
});


const server = http.createServer(app);
server.listen(PORT, () => `Server running on PORT ${PORT}`);