// guide template scroll
let scrollbox=document.querySelector(".guide-template-scrollbox")
let scrollleftbtn=document.querySelector(".leftscrollbtn")
let scrollrightbtn=document.querySelector(".rightbtn")

const autoscroll=()=>{
       scrollbox.scrollBy({left:300,behavior:"smooth"})
}
setInterval(autoscroll,10000)
scrollleftbtn.addEventListener('click',()=>{
 scrollbox.scrollBy({left:-300,behavior:"smooth"})
});
scrollrightbtn.addEventListener('click',()=>{
     scrollbox.scrollBy({left:300,behavior:"smooth"})
})
