import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";
import indexRouter from "./routes/index";
import userRouter from "./routes/users";
import videoRouter from "./routes/videos";
import routes from "./routes";

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.use(routes.index, indexRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
