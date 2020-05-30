const join = (req, res) => res.send("Join");
const login = (req, res) => res.send("Login");
const logout = (req, res) => res.send("Lotout");

const users = (req, res) => res.send("Users");
const userDetail = (req, res) => res.send("User Detail");
const editProfile = (req, res) => res.send("Edit Profile");
const changePassword = (req, res) => res.send("Change Password");

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
