const addtomatoes = document.getElementById("addtomatoes");
const tomatocounter = document.getElementById("tomatocounter");
let tomatoes = 0;

function updatepage() {
    tomatocounter.innerHTML = `${tomatoes} tomatoes`
}

addtomatoes.onclick = function() {
    tomatoes += 1;
    updatepage();
}

updatepage();