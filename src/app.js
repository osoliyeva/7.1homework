const displayImg = document.querySelector(".display > img")
const images = document.querySelectorAll(".img__slider > .img-item ")
const nextImage= document.querySelector(".next")
const prevImage= document.querySelector(".prev")

images.forEach(image => {
    image.addEventListener('click', (e) => {
        displayImg.src = e.target.src;
    });
});

nextImage.addEventListener("click", () => {
    let view = false;
    images.forEach((image, key) => {
        if (image.src == displayImg.src && !view) {
            if (images.length - 1 !== key) { 
                displayImg.src = images[key + 1].src;
            } else {
                displayImg.src = images[0].src;
            };
            view = true;
        }
    })
});
prevImage.addEventListener("click", () => {
    let view = false;
    images.forEach((image, key) => {
        if (image.src == displayImg.src && !view) {
            if (0!== key) { 
                displayImg.src = images[key - 1].src;
            } else {
                displayImg.src = images[images.length -1].src;
            };
            view = true;
        }
    })
});