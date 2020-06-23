/* eslint-disable import/prefer-default-export */
import routes from "./routes";
import multer from "multer";

export const locals = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.user = req.user || null;
  next();
};

export const uploadVideo = multer({ dest: "uploads/videos/" });
