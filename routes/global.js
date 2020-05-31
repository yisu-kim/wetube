import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videos";
import { getJoin, postJoin, login, logout } from "../controllers/users";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);

export default globalRouter;
