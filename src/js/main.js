document.addEventListener("DOMContentLoaded", () => {
    const videoBack = () => {
        const wrapper = document.querySelector(".wrapper");

        let instance = new vidbg(".wrapper", {
            mp4: "video/video.mp4",
            webm: "video/video.webm",
            poster: "img/cover-image.jpg",
        });

        wrapper.style.zIndex = ""; //плагин автоматически добавляет z-index, а из-за него не видно градиент, поэтому пришлось убрать
    };
    videoBack();

    const modalWindows = () => {
        const modalPreorder = document.querySelector(".modal-preorder");
        const btnOpenModalPreorder = document.querySelector(".film-description__pre-order");
        const modalTrailer = document.querySelector(".modal-trailer");
        const btnOpenModalTrailer = document.querySelector(".film-description__trailer");
        const videoFrame = modalTrailer.querySelector("iframe");

        btnOpenModalTrailer.addEventListener("click", () => {
            modalTrailer.classList.add("active");
            if (videoFrame.src !== "https://www.youtube.com/embed/V2LT1qwofzc") videoFrame.src = "https://www.youtube.com/embed/V2LT1qwofzc"; //есди ссылку до этого обнулили, то ее нужно заново установить
        });

        modalTrailer.addEventListener("click", (event) => {
            const target = event.target;
            if (target.matches(".modal-trailer") || target.matches(".modal-trailer__btn-close")) {
                modalTrailer.classList.remove("active");
                videoFrame.src = "";
            }
        });

        btnOpenModalPreorder.addEventListener("click", () => {
            modalPreorder.classList.add("active");
        });

        modalPreorder.addEventListener("click", (event) => {
            const target = event.target;
            if (target.matches(".modal-preorder") || target.matches(".modal-preorder__btn-close")) {
                modalPreorder.classList.remove("active");
            }
        });
    };
    modalWindows();
});
