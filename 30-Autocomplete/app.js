var resultElement, resultElements = [],
    positionTop = 100;
var container, input;
var countries = ["Almanya", "Avustralya", "Belçika", "Bulgaristan", "Cezayir", "Türkiye", "Tunus"];
var lowerCaseCountries, inputValue, filterCountries;


window.addEventListener("DOMContentLoaded", function() {
    container = document.querySelector(".container");
    input = document.querySelector("input[type=text]");
    lowerCaseCountries = countries.map(country => country.toLowerCase());

    input.addEventListener("keyup", function(e) {
        inputValue = input.value.trim().toLowerCase();

        if (inputValue !== null && inputValue !== "") {
            filterCountries = lowerCaseCountries.filter(country => country.indexOf(inputValue) !== -1)
            if (filterCountries.length !== 0) {
                removeResultElement();
                filterCountries.forEach(country => {
                    createResultElement(country);
                });
                elementHover(resultElements);
                addClickEvent(resultElements);
            } else {
                removeResultElement();
            }
        } else {
            removeResultElement();
        }
    });

});

function createResultElement(country) {
    resultElement = document.createElement("div");
    resultElement.style.width = "100%";
    resultElement.style.height = "50px";
    resultElement.style.backgroundColor = "#eeeeff";
    resultElement.style.position = "absolute";
    resultElement.style.top = positionTop + "px";
    resultElement.textContent = country;
    resultElement.style.textTransform = "uppercase";
    resultElement.style.display = "flex";
    resultElement.style.alignItems = "center";
    resultElement.style.paddingLeft = "10px";
    resultElement.style.cursor = "pointer";
    positionTop += 51;
    container.appendChild(resultElement);
    resultElements.push(resultElement);
}

function removeResultElement() {
    positionTop = 100;
    resultElements.forEach(function(element) {
        element.remove();
    });
}

function elementHover(elements) {
    elements.forEach(function(element) {
        element.addEventListener("mouseover", function() {
            element.style.filter = "grayscale(100%)";
        });
        element.addEventListener("mouseleave", function() {
            element.style.filter = "grayscale(0)";
        });
    });
}

function addClickEvent(elements) {
    elements.forEach(function(element) {
        element.addEventListener("click", function() {
            autoComplete(element);
        });
    });
}

function autoComplete(element) {
    input.value = element.textContent.toUpperCase();
    removeResultElement();
}