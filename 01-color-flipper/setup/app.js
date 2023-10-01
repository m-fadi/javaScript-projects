const colors = ["green", "red", "rgba(133,122,200)", "yellow"];
const btn= document.getElementById("btn")
const bg=document.getElementById("bg")
const col=document.querySelector(".col")

let colorNr=0
const flip=()=>{
    const randomNr= getRanNum()
bg.style.background = colors[randomNr];

col.innerHTML = colors[randomNr];

}
const getRanNum=()=> Math.floor(Math.random() * colors.length)