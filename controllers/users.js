/* eslint-disable import/prefer-default-export */
import routes from "../routes";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};
export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 },
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    // To Do: Register user
    // To Do: Log user in
    res.redirect(routes.home);
  }
};

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Login" });
export const postLogin = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) =>
  res.render("logout", { pageTitle: "Logout" });

export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "User Detail" });

export const getEditProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
export const postEditProfile = (req, res) => {
  const {
    body: { name, email },
  } = req;
  res.render("userDetail", { pageTitle: "User Detail" });
};

export const getChangePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });
export const postChangePassword = (req, res) => {
  const {
    body: { oldPassword, newPassword, newPassword2 },
  } = req;
  if (newPassword !== newPassword2) {
    res.status(400);
    res.redirect(routes.users + routes.changePassword);
  } else {
    res.render("userDetail", { pageTitle: "User Detail" });
  }
};
