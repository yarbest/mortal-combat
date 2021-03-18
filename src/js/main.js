const wrapper = document.querySelector(".wrapper");

let instance = new vidbg(".wrapper", {
    mp4: "video/video.mp4",
    webm: "video/video.webm",
    poster: "img/cover-image.jpg",
});

wrapper.style.zIndex = ""; //плагин автоматически добавляет z-index, а из-за него не видно градиент, поэтому пришлось убрать
