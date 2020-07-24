const videoPlayer = document.querySelector("#jsVideoPlayer video");

const registerView = () => {
  const videoId = window.location.href.split("/videos/")[1];
  fetch(`/api/${videoId}/view`, {
    method: "POST",
  });
};

function handleEnded() {
  registerView();
}

function init() {
  videoPlayer.addEventListener("ended", handleEnded);
}

if (videoPlayer) {
  init();
}
