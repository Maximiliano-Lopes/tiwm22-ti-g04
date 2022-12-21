
    var btn1 = document.querySelector("#manual-btn1")
    var btn2 = document.querySelector("#manual-btn2")
    var btn3 = document.querySelector("#manual-btn3")
    var btn4 = document.querySelector("#manual-btn4")

function Colocar(){
    btn1.classList.add("colored")
}


function RetirarCheck(obj) {
    var manualClicado = document.querySelector(`#${obj}`);

    if (manualClicado.matches("colored") == false){
        manualClicado.classList.add("colored")
        if (manualClicado.matches("#manual-btn1")== true) {
            btn2.classList.remove("colored")
            btn3.classList.remove("colored")
            btn4.classList.remove("colored")
        }else if (manualClicado.matches("#manual-btn2")== true) {
            btn1.classList.remove("colored")
            btn3.classList.remove("colored")
            btn4.classList.remove("colored")
        }else if (manualClicado.matches("#manual-btn3")== true) {
            btn1.classList.remove("colored")
            btn2.classList.remove("colored")
            btn4.classList.remove("colored")
        }else if (manualClicado.matches("#manual-btn4")== true) {
            btn1.classList.remove("colored")
            btn2.classList.remove("colored")
            btn3.classList.remove("colored")
        }
    }
}
