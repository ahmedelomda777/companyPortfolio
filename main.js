let nav= document.querySelector("nav")
window.addEventListener("scroll",()=>{
   nav.classList.toggle("nav-scroll", window.scrollY>100)
})

let drop=document.querySelector(".dropdown-toggle")
let menu =document.querySelector(".dropdown-menu")
let text = document.querySelector(".text")
function list(){
   
     menu.classList.toggle("display")
     

}
drop.addEventListener("click",()=>{
text.classList.toggle("position")
})

let dowm=document.querySelector(".down")
dowm.addEventListener("click",()=>{
   window.scrollTo(0,1050)


})


let item =document.getElementsByClassName("items")
let drk=document.getElementsByClassName("dark")
let card =document.getElementsByClassName("card")
let contComment=document.querySelector(".cont-comment")
let comments=document.querySelector(".comments")
let person =document.getElementsByClassName("person")
let pDark= document.getElementsByClassName("same")
let exambles =document.getElementsByClassName("ex-h")



function dark(){
   document.body.classList.toggle("black")
   menu.classList.toggle("bg-dark")
   for (let i = 0; i < item.length; i++) {
      item[i].classList.toggle("text-light")   
}
for(let c = 0; c<card.length;c++){
   card[c].classList.toggle("bg-dark")
   card[c].classList.toggle("text-light")
}
contComment.classList.toggle("bg-dark")
comments.classList.toggle("text-dark")
for(let p = 0; p<person.length;p++){
   person[p].classList.toggle("bg-dark")
   person[p].classList.toggle("text-light")
}
for(let pd = 0; pd<pDark.length;pd++){
   pDark[pd].classList.toggle("p-dark")
}
for(let e = 0; e<exambles.length;e++){
exambles[e].classList.toggle("text-light")
}
}


