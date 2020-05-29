import express from "express";
import routes from "../routes";

const indexRouter = express.Router();

indexRouter.get(routes.index, (req, res) => res.send("Index"));
indexRouter.get(routes.join, (req, res) => res.send("Join"));
indexRouter.get(routes.login, (req, res) => res.send("Login"));
indexRouter.get(routes.logout, (req, res) => res.send("Logout"));
indexRouter.get(routes.search, (req, res) => res.send("Search"));

export default indexRouter;
