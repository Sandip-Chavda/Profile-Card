const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

// modal ne open karva mate nu function

const openModal = () => {
    console.log("Modal is Open"); // aa khali cross varification mate chhe.
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
};

// modal ne close karva mate nu function

const closeModal = () => {
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
};