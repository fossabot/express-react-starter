#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("app");
const http = require("http");
const https = require("https");
const fs = require("fs");
/**
 * Get port from environment and store in Express.
 */
const globalPort = normalizePort(process.env.PORT || "3000");
app_1.default.set("port", globalPort);
/**
 * Create HTTP server.
 */
let server = null;
if (process.env.NODE_ENV === "production") {
    let options = {};
    options = {
        cert: fs.readFileSync("/etc/letsencrypt/live/.../fullchain.pem"),
        key: fs.readFileSync("/etc/letsencrypt/live/.../privkey.pem")
    };
    server = https.createServer(options, app_1.default);
}
else {
    server = http.createServer(app_1.default);
}
/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(globalPort);
server.on("error", onError);
/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}
/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
    if (error.syscall !== "listen") {
        throw error;
    }
    const bind = typeof globalPort === "string"
        ? "Pipe " + globalPort
        : "Port " + globalPort;
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
}
//# sourceMappingURL=backend.js.map