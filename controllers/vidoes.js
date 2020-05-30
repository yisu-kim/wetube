const index = (req, res) => res.render("index", { pageTitle: "Home" });
const search = (req, res) => res.render("search", { pageTitle: "Search" });

const videos = (req, res) => res.render("videos", { pageTitle: "Home" });
const upload = (req, res) => res.render("upload", { pageTitle: "Upload" });
const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });
const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });
const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });

const videoController = {
  index,
  search,
  videos,
  upload,
  videoDetail,
  editVideo,
  deleteVideo,
};

export default videoController;
