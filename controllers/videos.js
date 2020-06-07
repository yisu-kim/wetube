/* eslint-disable import/prefer-default-export */
import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};
export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path },
  } = req;
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description,
  });
  // To Do: Upload and save video
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });

export const getEditVideo = (req, res) => {
  const {
    params: { id },
  } = req;
  res.render("editVideo", { pageTitle: "Edit Video", video: videos[0] });
};
export const postEditVideo = (req, res) => {
  const {
    params: { id },
    body: { title, description },
  } = req;
  res.render("videoDetail", { pageTitle: "Video Detail" });
};

export const deleteVideo = (req, res) => {
  const {
    params: { id },
  } = req;
  // To Do: Delete video
  res.redirect(routes.home);
};
