$(document).ready(function(){
    console.log("radi");
  // $("header nav ul li a")
  $(".p2p li a").hide();
  $(".p2p li a").css('color','white');
  $(".p2p li a").fadeIn(2000);
});
var datum = new Date();
var dan = datum.getDate();
console.log(dan);
var mesec = datum.getMonth();
console.log(mesec);
var godina = datum.getFullYear();
console.log(godina);
var praviMesec = mesec +1;
console.log(praviMesec);
var ispisDatuma = dan +"."+ praviMesec+"." +godina+".";
//vezba
document.querySelector(".fl_right").innerHTML = ispisDatuma;
var privacy = ["Privacy","Advocates","About Us", "Contact"];

var ispis = "<ul class='p2p'>";

for(var i = 0; i < privacy.length; i++){
    ispis += "<li><a href='"+privacy[i]+".html'>" + privacy[i] + "</a></li>";
};
document.querySelector("nav").innerHTML = ispis;
ispis += "</ul>";
var tn = document.createTextNode('link text');

//slajder na pocetnoj strani
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("sliderPic");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    };
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
};


function razmakIzmedjuFigureAdvocate(){
    document.getElementById("whistleblowe").setAttribute("margin-top", "20px");
    console.log("snowden radi");
};


