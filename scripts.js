"use strict";

// Origin section

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

// Activity section

var ActslideIndex = 1;
ActshowDivs(ActslideIndex);

function ActplusDivs(n) {
  ActshowDivs((ActslideIndex += n));
}

function ActcurrentSlide(n) {
  ActshowDivs((ActslideIndex = n));
}

function ActshowDivs(n) {
  var i;
  var ASlides = document.getElementsByClassName("ActSlides");
  var dots = document.getElementsByClassName("dot");
  if (n > ASlides.length) {
    ActslideIndex = 1;
  }
  if (n < 1) {
    ActslideIndex = ASlides.length;
  }
  for (i = 0; i < ASlides.length; i++) {
    ASlides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    // dots[i].className = dots[i].className.replace(" active", "unactive");
    dots[i].classList.remove("active");
    dots[i].classList.add("unactive");
  }
  ASlides[ActslideIndex - 1].style.display = "block";
  dots[ActslideIndex - 1].className += " active";
}

// Talk? section

var GreetslideIndex = 1;
GreetshowDivs(GreetslideIndex);

function GreetplusDivs(n) {
  GreetshowDivs((GreetslideIndex += n));
}

function GreetcurrentSlide(n) {
  GreetshowDivs((GreetslideIndex = n));
}

function GreetshowDivs(n) {
  var i;
  var GSlides = document.getElementsByClassName("GreetSlides");
  var dots = document.getElementsByClassName("greetdot");
  if (n > GSlides.length) {
    GreetslideIndex = 1;
  }
  if (n < 1) {
    GreetslideIndex = GSlides.length;
  }
  for (i = 0; i < GSlides.length; i++) {
    GSlides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
    dots[i].classList.add("unactive");
  }
  GSlides[GreetslideIndex - 1].style.display = "block";
  dots[GreetslideIndex - 1].classList.add("active");
  dots[GreetslideIndex - 1].classList.remove("unactive");
}
