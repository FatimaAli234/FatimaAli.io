
//an event listener for scroll event
window.addEventListener('scroll',function(){
    //selects the header element
    var header = document.querySelector('header');
    //check if the page is scrolled down
    if (window.scrollY > 0) {
        //header-black if the page is scrolled down
        header.classList.add('header-black');
    }  else {
        //remove header-black  if the page is scolled up
        header.classList.remove('header-black');

    }
});

//services section

//an event listener for scroll event
window.addEventListener('scroll',function(){
    //get the services section id
    var servicesSection = this.document.getElementById('Services');
    // position of the services section
    var rect = servicesSection.getBoundingClientRect();
     //check if the services section is in the viewport
    if (rect.top <= this.window.innerHeight && rect.bottom >= 0) {
        //add black background on scroll
        servicesSection.classList.add('black-bg');
    } else {
        //remove black background if its on in the viewport
        servicesSection.classList.remove('black-bg');
    }


});

//Reviews section

//Intialize the slideindex to 1
var slideIndex = 1;
showSlides(slideIndex);

//function to increment and decrement the slide index
function plusSlides(n) {
    showSlides(slideIndex += n);
}
//function to set the current slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}
//function to display the corresponding to the current slide index
function showSlides(n) {
    var i;
    //get all elements with myslides id
    var slides = document.getElementsByClassName("myslides");
    //if the index is greater than the number of slides,it resets to the first slide
    if (n > slides.length) {slideIndex = 1}
    //if the index is less than 1,set to the last slide
    if (n < 1) {slideIndex = slides.length} 
    //hide all slides
    for (i = 0 ; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    //display the current slide
    slides[slideIndex-1].style.display = "block";

}