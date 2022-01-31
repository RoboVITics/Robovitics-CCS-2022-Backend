const express = require("express");
const app = express();
const http = require("http");
const PORT = process.env.PORT || 4000;
const cors = require("cors");
const db = require("./Config/Database");
const dotenv = require("dotenv");

dotenv.config();

app.use(express.json());
app.use(cors());

console.log(process.env.awsAccess);

db();

app.get('/api/connection', (req, res) => {
    res.sendStatus(200);
});

app.use('/api/public', require('./Routes/public/public'));
app.use('/api/config', require('./Routes/Configuration/Configuration'));

const server = http.createServer(app);
server.listen(PORT, () => `Server running on PORT ${PORT}`);