import * as express from "express";
import * as cookieParser from "cookie-parser";
import * as cors from "cors";
import * as session from "express-session";

const app = express();

import indexRouter from "Routes/Index";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(session({
    secret: "starter",
    resave: false,
    saveUninitialized: true
}));

app.use("/hello", indexRouter);

export default app;
