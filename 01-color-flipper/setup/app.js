const colors = ["green", "red", "rgba(133,122,200)", "yellow"];
const btn= document.getElementById("btn")
const bg=document.getElementById("bg")
const color=document.querySelector(".color")

let colorNr=0
const flip=()=>{
bg.style.background = colors[colorNr];
color.style.background = colors[colorNr];
color.innerHTML = colors[colorNr];
colorNr < colors.length-1? (colorNr++, console.log(colorNr)): colorNr=0
}