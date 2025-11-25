//JS code dedicated for index.html file

// Header footer text changing animation

const texts = ["Crafting Modern Architecture.", "Designing Innovative Spaces", "Shaping Futuristic Environments"]
let index = 0;

setInterval(() =>{
    index = (index + 1) % texts.length;
    document.querySelector("#text").innerText = texts[index];
}, 3000);


// Searching pages by search input function

const SmallMenu = document.querySelector("#SmallMenu");
const CloseBtn = document.querySelector("#CloseBtn");
const OpenMenu = document.querySelector("#OpenMenu");


OpenMenu.addEventListener("click", function(){
    SmallMenu.classList.add("add");
})

CloseBtn.addEventListener("click", function(){
    SmallMenu.classList.remove("add")
})

