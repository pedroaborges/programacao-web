let itemCollection = document.querySelectorAll(".item");

let btn1 = document.querySelector("#btn1");

btn1.onclick = function() {
    for(chinelinho of itemCollection){
        chinelinho.style.color = "red"; 
    }
        
}