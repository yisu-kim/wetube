const join = (req, res) => res.render("join", { pageTitle: "Join" });
const login = (req, res) => res.render("login", { pageTitle: "Login" });
const logout = (req, res) => res.render("logout", { pageTitle: "Logout" });

const users = (req, res) => res.render("users", { pageTitle: "Users" });
const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "User Detail" });
const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });

const userController = {
  join,
  login,
  logout,
  users,
  userDetail,
  editProfile,
  changePassword,
};

export default userController;
