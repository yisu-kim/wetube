/* eslint-disable import/prefer-default-export */
import routes from "./routes";
import multer from "multer";

export const locals = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1,
  };
  next();
};

export const uploadVideo = multer({ dest: "uploads/videos/" });
