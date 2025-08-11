import { setvalue } from "./storage.js";


let searchbtn=document.querySelector(".search-btn")

searchbtn.addEventListener('click',()=>{
    let inputtext=document.querySelector(".search-panel")
let inputvalue=inputtext.value;
    setvalue(inputvalue)
    window.location.href='main.html';
})


let form=document.querySelector(".form1")
let btn34=document.querySelector("#book-now")
form.addEventListener('submit',(e)=>{
e.preventDefault();
btn34.style.display="block";

})
let btn67=document.querySelectorAll(".booknow")
btn67.forEach(button=>{
    button.addEventListener('click',()=>{
        window.location.href="bookingform.html"
    })
})