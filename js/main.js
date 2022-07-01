let recipe = [];
let nav = document.getElementById("nav");
let navLink = Array.from( document.querySelectorAll(".nav-link"));
for(let i = 0 ; i <navLink.length ; i++ ){
  navLink[i].addEventListener("click" , function(e){
    let tar = e.target.name;
    ready();
    geT(tar);
  })
  }
async function geT(parameter = "pizza"){
let one = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${parameter}`);
let two = await one.json();
recipe = two.recipes;
display();
}
geT ()
function display(){
  let temp =``;
  let header = document.getElementById("header")
  recipe.forEach((element)=>{
    header.style.backgroundImage = ` url(${element.image_url})`
    temp += ` 
     <div   class=" text-center col-md-3 ">
    <div class="itemTwo">
    <a href="${element.source_url}">
        <img src="${element.image_url}"
            class="w-100 imgApi " alt="">
            </a>
        <h2 class=" text-center" >${element.publisher}</h2>
        <p class="text-center">${element.title}</p>
         
    </div>
</div>
 ` })
  document.getElementById("forOne").innerHTML = temp;
} 
// *********
$(window).scroll(function(){
let nana =  $("#nav").offset().top;
if(nana > "114.66666412353516"){
$(".navbar").css("backgroundColor" , "#c77371");
$(".navbar").css("padding-left" , "50px");
}
else{
$(".navbar").css("backgroundColor" , "rgba(0, 0, 0, 0.8)");
$(".navbar").css("padding-left" , "0px");
}
})
// **********
 function ready(){
$(".loading").fadeIn(200 , function(){
$(".spinner-border").fadeIn(200 , function(){
  $(".loading").fadeOut(200 , function(){
    $(".spinner-border").fadeOut(200);
  })
}) 
})
 }
$(document).ready(function(){
  $(".spinner-border").fadeOut(5  , function(){
  $(".loading").fadeOut(7  , function(){
  $(".navbar").css("display" , "flex");
  $("body , html").css("overflow-y", "auto");
  })  
  })
  })
 