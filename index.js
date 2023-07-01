
const midContainerEl = document.querySelector(".mid-container");
const midBgImage = ["27","23","25","26","10"];
const animeCover = ["tomo",
"slime",
"aot1",
"aot2",
"one piece","jujutus kaisan","konosuba","one punch man"];
const typeid = ["romance | comedy", 
`action| new world| overpower`,
"action | army "
, "revolution | Masterpiece", 
"action | friendship | badass",
"action | monster "
, "comedy | new world | magic",
 "overpower | action "];
const decription = [
    "decription 1", 
    "decription 2", 
    "decription 3", 
    "decription 4", 
    "decription 5",
    "decription 6",
    "decription 7",
    " A strong dude beating every enemies with one punch."
];
const epArray = [];
const chArray = [];
const lArray = [];
const rArray = [];
const animeSEl = document.querySelector(".animeS");
const prvEl = document.querySelector(".left");
const nextEl = document.querySelector(".right");
const aimgContainerEl = document.querySelector(".aimg-container");

const searchBox = document.querySelector(".search-box");
const searchBar = document.getElementById("s");
const animeListContainer = document.querySelector(".animes-list-container");
let tp ;
for (let t = 0; t < typeid.length; t++) {
    let typ = typeid[t];
     tp = wordWrap(typ,20);
}




for (let i = 0; i < midBgImage.length; i++) {
    const bgImg = document.createElement("img");
    bgImg.src = `img/${midBgImage[i]}.jpg`;
    aimgContainerEl.appendChild(bgImg);
    bgImg.classList.add("aimg");
    
}
const aimgEl = document.querySelector(".aimg");
const imgsEl = document.querySelectorAll(".aimg");
let currentImg = 1;

prvEl.addEventListener("click", ()=> {
    currentImg--;
    updateImage();
    resetTimeout();
})

nextEl.addEventListener("click", ()=>
{
    currentImg++;
    console.log("work")
    updateImage();
    resetTimeout();
})



const blurContainer = document.querySelector(".blur-container");
disable();

function epComein (co){
  co.classList.remove("active");
    blurContainer.classList.add("active");
    disable();
}


for (let j = 0; j < animeCover.length; j++) {
    newShowcase(animeCover[j],typeid[j],decription[j],j);
    searchList(animeCover[j],typeid[j]);
    
}
for (let c = 0; c < animeCover.length; c++) {
    let bn = chArray[c];
    let co = epArray[c];


    bn.addEventListener("click", () => {
    
    
    epComein(co);
    

        
    });
}
const searchInput = document.querySelector(".search")

searchInput.addEventListener('keypress', function(event) {
  if (event.keyCode === 13 || event.which === 13) {
    console.log(lArray);
    const firstVisibleElement = lArray.find(element => !element.classList.contains('hide'));
    console.log(firstVisibleElement);

    if (firstVisibleElement) {
      firstVisibleElement.click();
    }
  }
});





for (let c = 0; c < animeCover.length; c++) {
    let ls = lArray[c];
    let co = epArray[c];

   

    ls.addEventListener("click", () => {
    epComein(co);

    });
}

let timeOutId2;
let timeOutId3;
searchBar.addEventListener("keyup", ()=>{
    searchResult();
    animeListContainer.classList.remove("active");
    

});


searchBar.addEventListener("click", ()=>{
    animeListContainer.classList.remove("active");
    console.log(lArray);
    
});

  
let timeoutId = null;


function updateImage() {
    if(currentImg > imgsEl.length){
        currentImg = 1;
    }else if(currentImg<1) {
        currentImg = imgsEl.length;
    }
    aimgContainerEl.style.transform = `translateX(${-900 * (currentImg - 1)}px)`;
    timeoutId =setTimeout(() => {
                currentImg++;
                updateImage();
            }, 3000);
    
  }

  
function resetTimeout() {
    if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
    }
}
updateImage();


function newShowcase(cover,type,decri,j) {
// Create the main elements
const showcaseDiv = document.createElement('div');
showcaseDiv.className = 'showcase';

const coverContainerDiv = document.createElement('div');
coverContainerDiv.className = 'cover-container';

const coverImg = document.createElement('img');
coverImg.className = 'img';
coverImg.src = `img/${cover}.jpg`;
coverImg.alt = `${cover}`;


const decriDiv = document.createElement("div");
decriDiv.className = "decription-container";

const epContainer = document.createElement("div");

const btnEl = document.createElement("button");
btnEl.className= `check-btn` ;
btnEl.innerText = "Check";
chArray.push(btnEl);



const decriEl = document.createElement("p")
decriEl. className = "decription";
decriEl.innerText = `${decri}`;

const aTitle = document.createElement("h2")
aTitle.className = "anime-title";

aTitle.innerText = `name - ${cover}`;

const typeRe = document.createElement("p");
typeRe.className = "type";
let wrapty = wordWrap(`type - ${type}`, 20);
wrapty = wrapty.replace(/type -/g, '<strong>type -</strong>');
typeRe.innerHTML = wrapty.replace(/\n/g, '<br>');
typeRe.style.fontWeight = 'bold';

epBox(cover,type,decri,j);

coverContainerDiv.appendChild(coverImg);
showcaseDiv.appendChild(coverContainerDiv);
showcaseDiv.appendChild(aTitle);
showcaseDiv.appendChild(typeRe);
showcaseDiv.appendChild(decriDiv);
decriDiv.appendChild(decriEl);
decriDiv.appendChild(btnEl);

const mainContainerEl = document.querySelector(".main-container");
mainContainerEl.appendChild(showcaseDiv);
}




function epBox (cover,type,decription,j) {
    const epContainer = document.createElement("div");
    epContainer.classList.add(`ep-container`);
    epContainer.classList.add("active");
    const container = document.querySelector(".container");
    container.appendChild(epContainer);

    const imgroom = document.createElement("div");
    imgroom.className = "imgroom";
    epContainer.appendChild(imgroom);
    
    const epimg =document.createElement("img");
    epimg.className = "epimg";
    epimg.src = `img/`+ cover + `.jpg`;
    imgroom.appendChild(epimg);



    const name = document.createElement("h2")
    name.className = "aTitle";
    name.innerText = `${cover}`;
    epContainer.appendChild (name);

    const typeEp = document.createElement("p");
    typeEp.className = "type";
    let wrapty = wordWrap(`type - ${type}`, 50);
    wrapty = wrapty.replace(/type -/g, '<strong>type -</strong>');
    typeEp.innerHTML = wrapty.replace(/\n/g, '<br>');
    typeEp.style.fontWeight = 'bold';

    epContainer.appendChild(typeEp);

    const desEp = document.createElement("p")
    desEp.className = "ep-des";
    desEp.innerText = wordWrap(`  -  ${decription}`, 40);
    epContainer.appendChild(desEp);

    const epDiv = document.createElement("div");
    epDiv.className = "reD";
    epContainer.appendChild(epDiv);

    for (let ep = 1; ep <= 3; ep++) {
        const episode = document.createElement("a");
        episode.className = "episodes";
        episode.href = "tomo-chan is a girl/1.mp4";
        episode.innerText = `episode${ep}`;
        epDiv.appendChild(episode);
    }
   
    const crossIc = document.createElement("div");
    crossIc.className = "cross";
    crossIc.innerHTML = "&times";
    epContainer.appendChild(crossIc);

    crossIc.addEventListener("click", ()=>{
        epContainer.classList.add("active");
        blurContainer.classList.remove("active");
        disable();
    })


    epArray.push(epContainer);
}

function wordWrap(text, maxWidth) {
    let words = text.split(' ');
    let lines = [];
    let currentLine = '';
  
    words.forEach((word) => {
      if (currentLine.length + word.length <= maxWidth) {
        currentLine += word + ' ';
      } else {
        lines.push(currentLine.trim());
        currentLine = word + ' ';
      }
    });
  
    // Add the remaining line
    lines.push(currentLine.trim());
  
    return lines.join('\n');
  }



function searchList(cover,type) {

    
        const animeList =document.createElement("div");
        animeList.className = "animes-list";
    
        const listImg = document.createElement("img");
        listImg.className = "list-img";
        listImg.src = `img/${cover}.jpg`;
        animeList.appendChild(listImg);

        const animeTitle = document.createElement("h2");
        animeTitle.classList.add("anime-title");
        animeTitle.innerText= `${cover}`;
        
        const animeType = document.createElement("p");
        animeType.className = "p";
        animeType.innerText = `${type}`;

        const titleType = document.createElement("div");
        titleType.className = "title-type";

        titleType.append(animeTitle, animeType);
        animeList.append(listImg,titleType);

        animeListContainer.appendChild(animeList);
        lArray.push (animeList);


}


  
function searchResult() {
    const searchInput = document.querySelector(".search");
    const searchTerm = searchInput.value.toLowerCase();
  
    lArray.forEach((el) => {
      const listTitle = el.querySelector("h2");
      const T = listTitle.innerText.toLowerCase();
      const listType = el.querySelector(".p");
      const p = listType.innerText.toLowerCase();
      const animelistEl = el;
        
      
  
      if (!(T.includes(searchTerm) || p.includes(searchTerm))) {
        animelistEl.classList.add("hide");
      } else {
        animelistEl.classList.remove("hide");
      }
    });
  }
  
  

window.onscroll = () => {
  
}

window.onscroll = function() {
  const animeListContainer = document.querySelector(".animes-list-container");
    animeListContainer.classList.add("active");
    console.log("moving");
};


function disable() {
    if (blurContainer.classList.contains("active")) {
      blurContainer.style.overflow = "hidden";
      blurContainer.style.pointerEvents = "none";
      
    } else {
      blurContainer.style.overflow = "auto";
      blurContainer.style.pointerEvents = "auto";
    }
  }


  const typed = new Typed(".multiple-text", {
    strings: ['Welcome my fella', 'I am gald you here'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
  });