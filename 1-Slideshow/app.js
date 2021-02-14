let slideIndex = 1;
let timeout;
showSlides(slideIndex);

document.querySelector(".prev").addEventListener("click", function() {
    showSlides(slideIndex += -1);
});
document.querySelector(".next").addEventListener("click", function() {
    showSlides(slideIndex += 1);
});

function currentSlide(n) {
    showSlides(n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let indicators = document.getElementsByClassName("indicator");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";

    }
    for (let i = 0; i < indicators.length; i++) {
        indicators[i].className = indicators[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    indicators[slideIndex - 1].className += " active";
    clearTimeout(timeout);
    timeout=setTimeout(() => {
        showSlides(slideIndex+=1);
    }, 3000);
}