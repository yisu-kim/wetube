import express from "express";

const userRouter = express.Router();

const userHandler = (req, res) => {
  res.send("user index");
};

const userEditHandler = (req, res) => {
  res.send("user edit");
};

const userPasswordHandler = (req, res) => {
  res.send("user password");
};

userRouter.get("/", userHandler);
userRouter.get("/edit", userEditHandler);
userRouter.get("/password", userPasswordHandler);

export default userRouter;
