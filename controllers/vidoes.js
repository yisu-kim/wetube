const index = (req, res) => res.send("Index");
const search = (req, res) => res.send("Search");

const videos = (req, res) => res.send("Videos");
const upload = (req, res) => res.send("Upload");
const videoDetail = (req, res) => res.send("Video Detail");
const editVideo = (req, res) => res.send("Edit Video");
const deleteVideo = (req, res) => res.send("Delete Video");

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
