let nav= document.querySelector("nav")
window.addEventListener("scroll",()=>{
   nav.classList.toggle("nav-scroll", window.scrollY>100)
})
let drop = document.querySelector(".dropdown-toggle");
let menu = document.querySelector(".dropdown-menu");
let text = document.querySelector(".text");
function list() {
  menu.classList.toggle("display");
}
drop.addEventListener("click", () => {
  text.classList.toggle("position");
});

let item =document.getElementsByClassName("items")
let drk=document.getElementsByClassName("dark")

function dark(){
  document.body.classList.toggle("black")
  menu.classList.toggle("bg-dark")
  for (let i = 0; i < item.length; i++) {
     item[i].classList.toggle("text-light")   
}


}







const namee = document.querySelector("#inputName4")
const email = document.querySelector("#inputEmail4")
const pass = document.querySelector("#inputPassword4")
const mess = document.querySelector("#message")


let validateName="false"
let validateEmail="false"
let validatePass="false"
let validateMess="false"


namee.onkeyup= ()=>{
  if (namee.value.length<4){
    p1.style.display="block"
    namee.style.border="red solid 1px"
  }
  else{
    p1.style.display="none"
    namee.style.border="none"
    validateName="true"

  }
}


email.onfocus = ()=>{
  let p2 =document.querySelector(".p2")
 p2.style.display="block"
  
}
email.onkeyup = ()=>{

 let p2 =document.querySelector(".p2")
 p2.style.display="none"
  if(email.value.length <9 ){
    p2.style.display="block"
    email.style.border="red solid 1px"
    p2.textContent="please fill up your email\">9\""
  }
  else if(email.value.length >=9 ){
      p2.style.display="none"
      email.style.border="1px solid #dfe3ee"
      p2.textContent="*...@....com"
      validateEmail="true"

  }
}
email.onblur = ()=>{
  let p2 =document.querySelector("#p1")
  p2.style.display="none"
   
 }

pass.onfocus = ()=>{
 let p3 =document.querySelector("#p3")
 p3.style.display="block"
  
}
pass.onkeyup= ()=>{
  if(pass.value.length <=5 ){
    p3.style.display="block"
    pass.style.border="red solid 1px"
    p3.textContent="please fill up your pass\">5\""
  }
  else if(pass.value.length >5 ){
      p3.style.display="none"
      pass.style.border="1px solid #dfe3ee"
      p3.textContent="*make it strong by adding litters and numbers and marks"
      validatePass="true"
  }
}
pass.onblur = ()=>{
 let p3 =document.querySelector("#p3")
 p3.style.display="none"
  
}
mess.onkeyup= ()=>{
  if (mess.value.length<4){
    p4.style.display="block"
    mess.style.border="red solid 1px"
  }
  else{
    p4.style.display="none"
    mess.style.border="none"
    validateMess="true"

  }
}


document.forms[0].onsubmit= ()=>{
if (validateName==="false"||validateEmail==="false"||validatePass==="false"||validateMess==="false"){
 event.preventDefault()

 if(validateName==="false"){
  p2.style.display="block"
  namee.style.border="red solid 1px"

 }
 else if(validateEmail==="false"){
  p1.style.display="block"
  email.style.border="red solid 1px"
  p1.textContent="please fill up your email\">9\""

 }
 
 else if(validatePass==="false"){
  p3.style.display="block"
  pass.style.border="red solid 1px"
  p3.textContent="please fill up your pass\">5\""

 }
 else{
  p4.style.display="block"
  mess.style.border="red solid 1px"

 }}

else {
  function sendEmail(){}
}
}
















// let drk=document.querySelector("#black")
// drk.addEventListener("click",()=>{
//   document.body.classList.add("dark")
//   document.querySelector(".Recent").classList.add("dark-text")
//   document.querySelector("fieldset").classList.add("dark-grey")
//   document.querySelector("#black").classList.add("black-dark")
//   if(drk.onclick==="true"){
//     document.body.classList.remove("dark")
//     document.querySelector(".Recent").classList.remove("dark-text")
//     document.querySelector("fieldset").classList.remove("dark-grey")
//     document.querySelector("#black").classList.remove("black-dark")
// }

// }) 
