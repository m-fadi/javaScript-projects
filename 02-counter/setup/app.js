const dec=document.querySelector(".dec")
const inc=document.querySelector(".inc")
const res=document.querySelector(".res")
const count=document.querySelector(".counter")

let num=0

inc.addEventListener("click",()=>{
    num++
    count.innerHTML = num;
    count.style.color = num > 0? "red": num<0? "green" : "black"
    
}

)
dec.addEventListener("click",()=>{
    num--
count.innerHTML = num;
count.style.color = num > 0 ? "red" : num < 0 ? "green" : "black";
    
})
res.addEventListener("click",()=>{
num=0
count.innerHTML = num;
count.style.color = num > 0 ? "red" : num < 0 ? "green" : "black";
})