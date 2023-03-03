const express = require("express")

const server = express()

// SİHRİNİZİ GÖSTERİN

server.use(express.json());
const router = require("./cars/cars-router");
server.use("/api/cars", router);


module.exports = server
