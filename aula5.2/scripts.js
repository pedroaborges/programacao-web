let item1 = document.querySelector(".item1"); //verde
let item2 = document.querySelector(".item1"); //yellow

item1.addEventListener("mouseover", function(){
    this.style.backgroundColor = "red";
    this.innerHTML = "Computação";
});

item1.addEventListener("mouseout", function(){
    this.style.backgroundColor = "yellow";
    this.innerHTML = "1";
});