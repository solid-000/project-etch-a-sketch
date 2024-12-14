const container = document.querySelector(".grid-container");
const dimBtn = document.querySelector("#btn-dmn");
let side = 16;
let item = [];

createCanvas();

function createCanvas(){
    for(i=0;i<side*side;i++){
        item[i] = document.createElement("div");
        container.appendChild(item[i]);
    }
}

container.addEventListener("mouseover", (event) =>{
    let target = event.target;
    if(target === event.currentTarget){
        return;
    }
    target.style.backgroundColor = 'black';
});

dimBtn.addEventListener("click", () =>{
    let buffer = +prompt("Enter length of your canvas! (maximum 100)");
    if(buffer=== 0 || buffer===undefined || buffer>100 || buffer<0){
        alert("Invalid dimension. Please try again.")
    }else{
        side = buffer;
    }
    clearCanvas();
    createCanvas();
});

function clearCanvas(){
    container.innerHTML="";
}