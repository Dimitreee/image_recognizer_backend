import express from "express"

import io from "socket.io"
import http from "http"

const app = express()
const server = http.createServer(app)
const sockets = io(server)

sockets.on("connection", () => console.log("connected"))

server.listen(3001)