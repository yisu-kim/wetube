import express from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";
import mongoose, { mongo } from "mongoose";
import passport from "passport";
import "./passport";
import routes from "./routes";
import { locals } from "./middlewares";
import globalRouter from "./routers/global";
import userRouter from "./routers/users";
import videoRouter from "./routers/videos";
import apiRouter from "./routers/api";

const app = express();

const CookieStore = MongoStore(session);

app.use(helmet());
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new CookieStore({ mongooseConnection: mongoose.connection }),
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(locals);

app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
app.use(routes.api, apiRouter);

export default app;
