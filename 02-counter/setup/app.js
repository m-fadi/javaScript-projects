const btns=document.querySelectorAll(".bttn")
const count=document.querySelector(".counter")
console.log(btns)
let num=0
btns.forEach(btn => {
    btn.addEventListener("click",(e) => {
       e.currentTarget.classList.contains("inc")
           ? num++
           : e.currentTarget.classList.contains("dec")
           ? num--
           : num = 0;
          count.innerHTML = num;
          count.style.color = num > 0 ? "red" : num < 0 ? "green" : "black";  
    }
        
    );
    
}

);
// inc.addEventListener("click",()=>{
//     num++
//     count.innerHTML = num;
//     count.style.color = num > 0? "red": num<0? "green" : "black"
    
// }

// )
// dec.addEventListener("click",()=>{
//     num--
// count.innerHTML = num;
// count.style.color = num > 0 ? "red" : num < 0 ? "green" : "black";
    
// })
// res.addEventListener("click",()=>{
// num=0
// count.innerHTML = num;
// count.style.color = num > 0 ? "red" : num < 0 ? "green" : "black";
// })