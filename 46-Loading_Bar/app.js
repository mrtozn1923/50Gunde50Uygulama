var run, progress, progressValue;
window.addEventListener("DOMContentLoaded", function() {

    run = document.querySelector(".run");
    progress = document.querySelector(".progress");
    clearProgress();
    run.addEventListener("click", function() {
        clearProgress();
        setProgress();
    });

});

function setProgress() {
    setTimeout(() => {
        if (progressValue < 100) {
            progressValue += 25;
            progress.style.width = progressValue + "%";
            progress.innerHTML = "%" + progressValue;
            setProgress();
        }
    }, 2000);
}

function clearProgress() {
    progressValue = 0;
    progress.style.width = progressValue + "%";
    progress.innerHTML = "%" + progressValue;
}