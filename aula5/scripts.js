document.querySelector("#btn1").onclick = function() {
    //codigo
}


let btn1 = document.querySelector("#btn1");//seleciona o elemento
let img1 = document.querySelector("#img1");//seleciona o elemento que vai sofrer a ação
let btn2 = document.querySelector("#btn2");
btn2.onclick = function(){ //qual ação será escutada
    //codigo
    img1.setAttribute("src", "images/monalisapb.jpg")
}

btn1.onclick = function(){ //qual ação será escutada
    //codigo
    img1.setAttribute("src", "images/monalisa.jpg")
}