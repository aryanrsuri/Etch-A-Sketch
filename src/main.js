const BOX = document.querySelector(".grid");
let Color = "black";

function buildGrid(size) {
    if (size == null || size > 100) {
        size = 16;
    } 

    const CSS = `
        grid-template-columns: repeat(${size},1fr);
        grid-template-rows: repeat(${size},1fr);
    `

    BOX.style.cssText = CSS;
    for (i=0;i<size*size; i++) {
        let div = document.createElement("div");
        BOX.appendChild(div)
        div.classList.add("gridbox");
        div.addEventListener("click", drawBox);
    }
} 

function resizeGrid(value) {
    try {
        BOX.innerHTML = ``;
        buildGrid(value);
    } catch(Error) {
        console.log(Error);
    }

    return 
}

function setColor(value) {
    console.log(`Color set to ${value}`);
    Color =  value.trim().toLowerCase()
}
function drawBox() {
    let color = Color;
    this.style.backgroundColor = color;
}

(buildGrid)();