import express from "express";
import routes from "../routes";
import userController from "../controllers/users";

const userRouter = express.Router();

userRouter.get(routes.users, userController.users);
userRouter.get(routes.userDetail, userController.userDetail);
userRouter.get(routes.editProfile, userController.editProfile);
userRouter.get(routes.changePassword, userController.changePassword);

export default userRouter;
