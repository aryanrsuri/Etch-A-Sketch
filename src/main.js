const BOX = document.querySelector(".grid");
function render() {
    console.log("Hello")
}


function buildGrid(size) {
    if (size == null) {
        size = 16;
    }

    const CSS = `
        display: grid;
        gap: 0.2rem;
        grid-template-columns: repeat(${size},1fr);
        grid-template-rows: repeat(${size},1fr);
    `

    BOX.style.cssText = CSS;
    for (i=0;i<size*size; i++) {
        let div = document.createElement("div");
        BOX.appendChild(div)
        div.classList.add("gridbox");
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
(function() {buildGrid();})();