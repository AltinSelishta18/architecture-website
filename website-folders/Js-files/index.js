//JS code dedicated for index.html file

// Header footer text changing animation

const texts = ["Crafting Modern Architecture.", "Designing Innovative Spaces", "Shaping Futuristic Environments"]
let index = 0;

setInterval(() =>{
    index = (index + 1) % texts.length;
    document.querySelector("#text").innerText = texts[index];
}, 3000);


const SmallMenu = document.querySelector("#SmallMenu");
const CloseBtn = document.querySelector("#CloseBtn");
const OpenMenu = document.querySelector("#OpenMenu");


OpenMenu.addEventListener("click", function(){
    SmallMenu.classList.add("add");
})

CloseBtn.addEventListener("click", function(){
    SmallMenu.classList.remove("add")
})

//Searching function made by input search will be created here

const SearchElements = [
    {Name: "HOME", Url:"../html-files/index.html"},
    {Name: "ABOUT", Url:"../html-files/about.html"},
    {Name: "PROJECTS", Url:"../html-files/projects.html"},
    {Name: "CONTACT", Url:"../html-files/contact.html"},
    {Name: "SERVICES", Url:"../html-files/Services.html"},
    {Name: "CONSULTATIONS", Url:"../html-files/Consultations.html"},
]

const SearchInput = document.querySelector("#SearchInput");
const itemSearch = document.querySelector("#itemSearch");

SearchInput.addEventListener("input", function(){
    const query = SearchInput.value.toLowerCase();

    const filtered = SearchElements.filter(item => item.Name.toLowerCase().includes(query));
    const filteredElements = filtered.map(item => `<a href="${item.Url}">${item.Name}</a>`);

    itemSearch.innerHTML = filteredElements;

    if(SearchInput.value.trim() === ""){
        itemSearch.style.display = "none";
    }

    else{
        itemSearch.style.display = "block";
    }
})
