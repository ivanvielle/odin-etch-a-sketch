console.log("Hello World");
let settingsBtn = document.querySelector("#settingsBtn");
let resetBtn = document.querySelector("#resetBtn");

let rows = Number(prompt("How many rows do you want?"));
let columns = Number(prompt("How many columns do you want?"));

function makeDiv(rows, cols) {
    const CONTAINER_DIV = document.querySelector("#container");

    for (let i = 1; i <= rows * cols; i++) {
        let newDiv = document.createElement("div");
        newDiv.setAttribute("id", `grid-${i}`);
        newDiv.setAttribute("class", "grid");
        newDiv.textContent = i;
        newDiv.style.flexBasis = `calc(100% / ${columns})`;
        newDiv.addEventListener("mouseover", function (e) {
            newDiv.classList.add("hovered");
        });

        CONTAINER_DIV.appendChild(newDiv);
    }
}

function updateSettings() {
    let items = document.querySelectorAll("div.grid");

    for (let i = 0; i < items.length; i++) {
        items[i].remove();
    }

    rows = Number(prompt("How many rows do you want?"));
    columns = Number(prompt("How many columns do you want?"));

    makeDiv(rows, columns);
}

function reset() {
    let items = document.querySelectorAll("div.hovered");
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove("hovered");
    }
}

settingsBtn.addEventListener("click", updateSettings);
resetBtn.addEventListener("click", reset);

makeDiv(rows, columns);
