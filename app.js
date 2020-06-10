import express from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import morgan from "morgan";
import globalRouter from "./routes/global";
import userRouter from "./routes/users";
import videoRouter from "./routes/videos";
import routes from "./routes";
import { locals } from "./middlewares";

const app = express();

app.use(helmet());
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(locals);

app.use("/uploads", express.static("uploads"));
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
