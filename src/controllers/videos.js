/* eslint-disable import/prefer-default-export */
import routes from "../routes";
import Video from "../models/Video";
import Comment from "../models/Comment";

export const home = async (req, res) => {
  let videos = [];
  try {
    videos = await Video.find({}).sort({ createdAt: "desc" });
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos });
  }
};
export const search = async (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  let videos = [];
  try {
    videos = await Video.find().or([
      { title: { $regex: searchingBy, $options: "i" } },
      { description: { $regex: searchingBy, $options: "i" } },
    ]);
    console.log(videos);
    res.render("search", {
      pageTitle: "Search",
      searchingBy,
      videos,
    });
  } catch (error) {
    res.render("search", { pageTitle: "Search", searchingBy, videos });
  }
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const postUpload = async (req, res) => {
  const {
    user,
    body: { title, description },
    file: { path },
  } = req;
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description,
    creator: user.id,
  });
  user.videos.push(newVideo.id);
  user.save();
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id)
      .populate("creator")
      .populate("comments");
    res.render("videoDetail", { pageTitle: video.title, video });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const getEditVideo = async (req, res) => {
  const {
    user,
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    if (video.creator.toString() === user.id) {
      return res.render("editVideo", {
        pageTitle: `Edit ${video.title}`,
        video,
      });
    }
    throw Error();
  } catch (error) {
    res.redirect(routes.home);
  }
};
export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description },
  } = req;
  try {
    await Video.findByIdAndUpdate(id, { title, description });
    res.redirect(routes.videoDetail(id));
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const deleteVideo = async (req, res) => {
  const {
    user,
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    if (video.creator.toString() === user.id) {
      await Video.findByIdAndDelete(id);
    } else {
      throw Error();
    }
  } catch (error) {
  } finally {
    res.redirect(routes.home);
  }
};

export const postRegisterView = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    video.views += 1;
    video.save();
    res.status(200);
  } catch (error) {
    res.status(400);
  } finally {
    res.end();
  }
};

export const postAddComment = async (req, res) => {
  const {
    params: { id },
    body: { comment },
    user,
  } = req;
  try {
    const video = await Video.findById(id);
    const newComment = await Comment.create({
      text: comment,
      creator: user.id,
    });
    video.comments.push(newComment.id);
    video.save();
    res.status(200);
  } catch (error) {
    res.status(400);
  } finally {
    res.end();
  }
};
