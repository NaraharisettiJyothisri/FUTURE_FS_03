function scrollToContact(){
document.getElementById("contact").scrollIntoView();
}

document.getElementById("contactForm")
.addEventListener("submit",function(e){

e.preventDefault();

document.getElementById("success")
.innerText="Thank you! We will contact you soon.";

});