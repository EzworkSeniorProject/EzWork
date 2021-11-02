"use strict";

//Containers
var start = document.querySelector(".start");
var expertise = document.querySelector(".expertise");
var education = document.querySelector(".education");
var employment = document.querySelector(".employment");
var hourlyRate = document.querySelector(".hourlyRate");
var titleDescription = document.querySelector(".titleDescription");
var profilePhoto = document.querySelector(".profilePhoto");
var location = document.querySelector(".location"); //Side Nav

var expertiseNav = document.getElementById("expertiseNav");
var linkeninNav = document.getElementById("linkeninNav");
var educationNav = document.getElementById("educationNav");
var employmentNav = document.getElementById("employmentNav");
var payRateNav = document.getElementById("payRateNav");
var titleNav = document.getElementById("titleNav");
var profilePicNav = document.getElementById("profilePicNav");
var locationNav = document.getElementById("locationNav"); // LINKEDIN CARD

var skipBtn = document.getElementById("skipStep");
skipBtn.addEventListener("click", function () {
  expertise.style.display = "block";
  start.style.display = "none";
  expertiseNav.style.background = "lightgray";
  linkeninNav.style.background = "whitesmoke";
}); // Next Button for start

var nextBtn = document.getElementById("nextStep");
nextBtn.addEventListener("click", function () {
  expertise.style.display = "block";
  start.style.display = "none";
  expertiseNav.style.background = "lightgray";
  linkeninNav.style.background = "whitesmoke";
}); // EXPERTISE CARD

var backToLinkedInBTN = document.getElementById("backToLinkedIn");
backToLinkedInBTN.addEventListener("click", function () {
  expertise.style.display = "none";
  start.style.display = "inline-block";
  expertiseNav.style.background = "whitesmoke";
  linkeninNav.style.background = "lightgray";
});
var nextStepEducationBtn = document.getElementById("nextStepEducation");
nextStepEducationBtn.addEventListener("click", function () {
  expertise.style.display = "none";
  education.style.display = "inline-block";
  expertiseNav.style.background = "whitesmoke";
  educationNav.style.background = "lightgray";
}); // EDUCATION CARD

var backToExpertiseBtn = document.getElementById("backToExpertise");
backToExpertiseBtn.addEventListener("click", function () {
  expertise.style.display = "inline-block";
  education.style.display = "none";
  expertiseNav.style.background = "lightgray";
  educationNav.style.background = "whitesmoke";
});
var nextStepEmploymentBtn = document.getElementById("nextStepEmployment");
nextStepEmploymentBtn.addEventListener("click", function () {
  education.style.display = "none";
  employment.style.display = "inline-block";
  educationNav.style.background = "whitesmoke";
  employmentNav.style.background = "lightgray";
});