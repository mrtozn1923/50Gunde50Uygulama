var draggableElement;
var container;
var p1, p2, p3, p4;
var elementWidth, elementHeight, containerWidth, containerHeight;

window.addEventListener("DOMContentLoaded", function() {

    draggableElement = document.getElementsByClassName("draggable-element")[0];
    container = document.getElementsByClassName("container")[0];
    draggableElement.addEventListener("mousedown", dragMouseDown);

    elementWidth = window.getComputedStyle(draggableElement).width; //(width)px 
    elementWidth = elementWidth.slice(0, elementWidth.length - 2); //(width)
    elementHeight = window.getComputedStyle(draggableElement).height; //(height)px
    elementHeight = elementHeight.slice(0, elementHeight.length - 2); //(height)

    containerWidth = window.getComputedStyle(container).width; //(width)px 
    containerWidth = containerWidth.slice(0, containerWidth.length - 2); //(width)
    containerHeight = window.getComputedStyle(container).height; //(height)px
    containerHeight = containerHeight.slice(0, containerHeight.length - 2); //(height)

});

function dragMouseDown(e) {
    p3 = e.clientX;
    p4 = e.clientY;
    container.addEventListener("mousemove", elementDrag);
    container.addEventListener("mouseup", closeDragElement);
}

function elementDrag(e) {
    p1 = p3 - e.clientX;
    p2 = p4 - e.clientY;
    if ((draggableElement.offsetTop - p2) >= (elementHeight / 2) && (draggableElement.offsetTop - p2) <= containerHeight - (elementHeight / 2)) {
        draggableElement.style.top = (draggableElement.offsetTop - p2) + "px";
        p4 = e.clientY;
    } else {}
    if ((draggableElement.offsetLeft - p1) >= (elementWidth / 2) && (draggableElement.offsetLeft - p1) <= containerWidth - (elementWidth / 2)) {
        draggableElement.style.left = (draggableElement.offsetLeft - p1) + "px";
        p3 = e.clientX;
    } else {}
}

function closeDragElement() {
    container.removeEventListener("mousemove", elementDrag);
    container.removeEventListener("mouseup", closeDragElement);
}