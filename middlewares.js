/* eslint-disable import/prefer-default-export */
import routes from "./routes";

export const locals = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  next();
};
