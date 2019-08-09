const express = require('express');
const server = express();

server.use(express.json());
server.get('/', (req, res) => {
	res.send('<h1>Welcome to my Sprint Challenge!</h1>');
});
