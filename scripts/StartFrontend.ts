#!/usr/bin/env node

import * as express from "express";
import * as fs from "fs";
import * as http from "http";
import * as https from "https";

const app = express();
const port = 80;

app.use(express.static("public/frontend/"));

let options = {
    cert: fs.readFileSync("/etc/letsencrypt/live/.../fullchain.pem"),
    key: fs.readFileSync("/etc/letsencrypt/live/.../privkey.pem")
};

http.createServer(app).listen(80);
https.createServer(options, app).listen(443);

app.listen(port, (err: string) => {
    if (err) {
        console.log(`Error starting up: ${err}`);
    }

    console.log(`Started on port: ${port}`);
});
