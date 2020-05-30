import express from "express";
import routes from "../routes";
import videoController from "../controllers/vidoes";
import userController from "../controllers/users";

const indexRouter = express.Router();

indexRouter.get(routes.index, videoController.index);
indexRouter.get(routes.search, videoController.search);
indexRouter.get(routes.join, userController.join);
indexRouter.get(routes.login, userController.login);
indexRouter.get(routes.logout, userController.logout);

export default indexRouter;
