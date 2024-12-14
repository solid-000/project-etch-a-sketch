const container = document.querySelector(".grid-container");
let item = [];
for(i=0;i<256;i++){
    item[i] = document.createElement("div");
    item[i].textContent = i+1;
    container.appendChild(item[i]);
}
container.addEventListener("mouseover", (event) =>{
    let target = event.target;
    console.log(target.textContent);
    target.style.backgroundColor = 'black';
});