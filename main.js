// global refernces

import { getvalue } from "./storage.js";
let data;
let data2;
let data3;
let data4;
// refernces

// refernces
let countryname=document.querySelector(".nameofcountry")
let countrycapital=document.querySelector(".capitalvalue")
let countryregionvalue=document.querySelector(".countryregionvalue")
let countrycurrency=document.querySelector(".countrycurrency")
let languagevalue=document.querySelector(".languagevalue")
let populationvalue=document.querySelector(".populationsvalue")
let countryimage=document.querySelector(".photodivvlaue")
let countrydesvalue=document.querySelector(".main-country-description")
// let image1 = document.querySelector(".image1");
// let image2 = document.querySelector(".image2");
// let image3 = document.querySelector(".image3");
// let image4 = document.querySelector(".image4");
// let image5 = document.querySelector(".image5");
// let image6 = document.querySelector(".image6");
// let image7 = document.querySelector(".image7");
// let image8 = document.querySelector(".image8");
// let image9 = document.querySelector(".image9");
// let image10 = document.querySelector(".image10");
// let image11 = document.querySelector(".image11");
// let image12 = document.querySelector(".image12");
// let image13 = document.querySelector(".image13");
// let image14 = document.querySelector(".image14");
// let image15 = document.querySelector(".image15");
// let image16 = document.querySelector(".image16");
// let image17 = document.querySelector(".image17");
// let image18 = document.querySelector(".image18");
// let image19 = document.querySelector(".image19");
// let image20 = document.querySelector(".image20");

let video1=document.querySelector(".video1")
let video2=document.querySelector(".video2")
let video3=document.querySelector(".video3")


let p1=document.querySelector(".p1")
let p2=document.querySelector(".p2")
let p3=document.querySelector(".p3")



let inputvalue;
window.addEventListener("DOMContentLoaded", () => {
 let s=getvalue();
  console.log(s);
  let y=s.charAt(0).toUpperCase()+s.slice(1).toLowerCase();
  inputvalue=y;
  console.log(inputvalue)


let url=`https://restcountries.com/v3.1/name/${inputvalue}`
// 51100038-b7f729c94f2b75c833755e54d
const fetchapi=async()=>{
let apilink=await fetch(url)
 data=await apilink.json();
console.log("data 1->",data)
updatvalues2();
}
fetchapi();
// images api

let key="51100038-b7f729c94f2b75c833755e54d"
let url2=`https://pixabay.com/api/?key=${key}&q=${inputvalue}+vacation&image_type=photo&per_page=20`
const fetchimageapi=async()=>{
    let apilink2=await fetch(url2)
    data2=await apilink2.json();
    console.log("data 2->",data2)
    updateimage();
}
fetchimageapi();
// // description api
let url3=`https://en.wikipedia.org/api/rest_v1/page/summary/${inputvalue}`
const getdesapi=async()=>{
    let apilink3=await fetch(url3);
    data3=await apilink3.json();
    console.log("data 3->",data3)
    console.log(data3.title)
    updatvalues();
}


getdesapi();

let url4=`https://pixabay.com/api/videos/?key=${key}&q=${inputvalue}+cities`
const fetchvideoapi=async()=>{
let apilink4=await fetch(url4)
data4=await apilink4.json();
console.log("data4",data4)
updatevideo();
}
fetchvideoapi();

})




const updatvalues=()=>{
countryname.textContent=data3.title;
countrydesvalue.textContent=data3.extract
countryimage.src=data3.originalimage.source;

 p1.textContent=`Explore ${data3.title}`
 p2.textContent=`Explore ${data3.title}`
  p3.textContent=`Explore ${data3.title}`

}
const updatvalues2=()=>{
    countryregionvalue.textContent=data[0].region
    countrycapital.textContent=data[0].capital;
   
}
let variable=1;
const updateimage=()=>{
    let images=[];
    let placenames=[];
    for(let i=1;i<21;i++){
        images[i]=document.querySelector(`.image${i}`)
        placenames[i]=document.querySelector(`.placename${i}`)
    }
  // image1.src=data2.hits[0].webformatURL;
  for(let i=0;i<20;i++){
    images[i+1].src=data2.hits[i].webformatURL;
    placenames[i+1].textContent=data2.hits[i].tags;
  }

}

const updatevideo=()=>{
  let videos=[];
  let videoplacename=[];
  for(let i=1;i<=15;i++){
    videos[i]=document.querySelector(`.video${i}`)
    videoplacename[i]=document.querySelector(`.video${i}-1`)
  }
  for(let i=0;i<15;i++){
    videos[i+1].src=data4.hits[i].videos.medium.url;
    videoplacename[i+1].textContent=data4.hits[i].tags
  }
video1.src=data4.hits[1].videos.medium.url

}



// rerfernces
let b1=document.querySelector(".b1")
let b2=document.querySelector(".b2")
let b3=document.querySelector(".b3")

// randome numbers;;
let obj1=[2,3,4,5];
let ran1=obj1[Math.random().toFixed(0)]
let obj2=[2,3,4,5];
let ran2=obj2[Math.random().toFixed(0)]
let obj3=[2,3,4,5];
let ran3=obj3[Math.random().toFixed(0)]


b1.innerHTML=`<strong>👥 For:</strong> ${ran1} Persons`
b2.innerHTML`<strong>👥 For:</strong> ${ran2} Persons`
b3.innerHTML=`<strong>👥 For:</strong> ${ran3} Persons`
console.log(ran1,ran2,ran3)


