/* eslint-disable import/prefer-default-export */
import routes from "./routes";
import multer from "multer";

export const locals = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
  next();
};

export const onlyPublic = (req, res, next) => {
  if (req.user) {
    return res.redirect(routes.home);
  }
  next();
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    return next();
  }
  res.redirect(routes.home);
};

export const uploadVideo = multer({ dest: "uploads/videos/" });
export const uploadAvatar = multer({ dest: "uploads/avatars/" });
