//JS code dedicated for index.html file

// Header footer text changing animation

const texts = ["Crafting Modern Architecture.", "Designing Innovative Spaces", "Shaping Futuristic Environments"]
let index = 0;

setInterval(() =>{
    index = (index + 1) % texts.length;
    document.querySelector("#text").innerText = texts[index];
}, 3000);