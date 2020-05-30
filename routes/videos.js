import express from "express";
import routes from "../routes";
import {
  upload,
  videoDetail,
  editVideo,
  deleteVideo,
} from "../controllers/videos";

const videoRouter = express.Router();

videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
