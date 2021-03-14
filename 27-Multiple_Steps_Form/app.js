window.addEventListener("DOMContentLoaded", function() {

    var formBody = document.querySelector(".form-body");
    var btnPrev = document.getElementById("btn-prev");
    var btnNext = document.getElementById("btn-next");
    var userInfo = document.querySelectorAll(".user-info");
    var indicators = document.querySelectorAll(".indicator");
    var shiftRate = 0,currentState = 1;
    var inputs=document.querySelectorAll(".user-info input");
    var inputControlResult=[];

    btnPrev.disabled = true;
    indicators[0].style.backgroundColor = "black";

    btnNext.addEventListener("click", function() {
        if (userInfo.length > currentState) {
            if (inputControl(inputs)){
                shiftRate -= 100;
                formBody.style.transform = "translateX(" + shiftRate + "%)";
                indicators[currentState - 1].style.backgroundColor = "grey";
                indicators[currentState].style.backgroundColor = "black";
                currentState += 1;
                btnPrev.disabled = false;
                if (userInfo.length === currentState) {
                    //disable next and prev button
                    btnNext.disabled = true;
                    btnPrev.disabled = true;
                }
            }
        }
    });
    btnPrev.addEventListener("click", function() {
        if (currentState > 1) {
            shiftRate += 100;
            formBody.style.transform = "translateX(" + shiftRate + "%)";
            currentState -= 1;
            indicators[currentState].style.backgroundColor = "grey";
            indicators[currentState - 1].style.backgroundColor = "black";
            btnNext.disabled = false;
            if (currentState === 1) {
                btnPrev.disabled = true;
            }
        }
    });
    function inputControl(inputs) {
        inputs.forEach(input => {
            if (input.value.trim() != ""){
                input.style.outline = "initial";
                inputControlResult.push(true);
            }else{
                input.style.outline = "1px solid red";
                inputControlResult.push(false);
            }
        });
        console.log(inputControlResult);
        if(inputControlResult.indexOf(false)!=-1){
            //clear array
            inputControlResult.splice(0,inputControlResult.length);
            return false;
        }else{
            //clear array
            inputControlResult.splice(0,inputControlResult.length);
            return true;
        }
    }
});