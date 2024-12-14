const container = document.querySelector(".grid-container");
const dimBtn = document.querySelector("#btn-dmn");
const reset = document.querySelector("#reset");
let side = 16;
let item = [];
let calc = 100/side;
createCanvas();

function createCanvas(){
    for(i=0;i<side*side;i++){
        item[i] = document.createElement("div");
        item[i].style.flexBasis = calc + "%";
        container.appendChild(item[i]);
    }
}

container.addEventListener("mouseover", (event) =>{
    let pixel = event.target;
    if(pixel === event.currentTarget){
        return;
    }
    pixel.style.backgroundColor = randomRgb();
});

dimBtn.addEventListener("click", () =>{
    let buffer = +prompt("Enter length of your canvas! (maximum 100)");
    if(buffer=== 0 || buffer===undefined || buffer>100 || buffer<0){
        alert("Invalid dimension. Please try again.")
    }else{
        side = buffer;
    }
    calc = 100/side;
    clearCanvas();
    createCanvas();
});

reset.addEventListener("click", () =>{
    clearCanvas();
    createCanvas();
});

function clearCanvas(){
    container.innerHTML="";
}
function randomRgb(){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    // let a = 1;
    return `rgb(${r},${g},${b})`;
}