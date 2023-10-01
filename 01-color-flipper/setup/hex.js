const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn= document.getElementById("btn")
const color=document.querySelector(".color")
const cont= document.querySelector("main")
btn.style.background="red"
btn.addEventListener
    ("click",
    () => {
        
        const randomNum = generateNum();
        color.innerHTML=randomNum
        cont.style.background=randomNum
    });

const generateNum=()=>{
    
    let color="#"
    for(i=0; i< 6;i++){
        console.log(color)
color += hex[Math.floor(Math.random() * hex.length)];

    }
   return color; 
}