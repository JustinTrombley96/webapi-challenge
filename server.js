const express = require('express');
const router = require('./data')
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
	res.status(200).json("It works!");
});
server.use('/', router)

module.exports = server;
