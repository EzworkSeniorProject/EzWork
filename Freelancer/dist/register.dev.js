"use strict";

//Conatiners
var start = document.querySelector(".start");
var expertise = document.querySelector(".expertise");
var education = document.querySelector(".education");
var employment = document.querySelector(".employment");
var hourlyRate = document.querySelector(".hourlyRate");
var titleDescription = document.querySelector(".titleDescription");
var profilePhoto = document.querySelector(".profilePhoto");
var locationCard = document.querySelector(".locationCard"); //Side Nav

var expertiseNav = document.getElementById("expertiseNav");
var linkeninNav = document.getElementById("linkeninNav");
var educationNav = document.getElementById("educationNav");
var employmentNav = document.getElementById("employmentNav");
var payRateNav = document.getElementById("payRateNav");
var titleNav = document.getElementById("titleNav");
var profilePicNav = document.getElementById("profilePicNav");
var locationNav = document.getElementById("locationNav"); //Buttons

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
}); // Employment Card

var backToEducationBtn = document.getElementById("backToEducation");
backToEducationBtn.addEventListener("click", function () {
  employment.style.display = "none";
  education.style.display = "inline-block";
  educationNav.style.background = "lightgray";
  employmentNav.style.background = "whitesmoke";
});
var nextStepPayRateBtn = document.getElementById("nextStepPayRate");
nextStepPayRateBtn.addEventListener("click", function () {
  employment.style.display = "none";
  hourlyRate.style.display = "inline-block";
  payRateNav.style.background = "lightgray";
  employmentNav.style.background = "whitesmoke";
}); //HOURLY RATE

var nextStepTitleBtn = document.getElementById("nextStepTitle");
nextStepTitleBtn.addEventListener("click", function () {
  hourlyRate.style.display = "none";
  payRateNav.style.background = "whitesmoke";
  titleDescription.style.display = "inline-block";
  titleNav.style.background = "lightgray";
}); // TITLE AND DESCRIPTION

var nextStepProfilePhotoBtn = document.getElementById("nextStepProfilePhoto");
nextStepProfilePhotoBtn.addEventListener("click", function () {
  titleDescription.style.display = "none";
  titleNav.style.background = "whitesmoke";
  profilePhoto.style.display = "inline-block";
  profilePicNav.style.background = "lightgray";
}); // PROFILE PHOTO

var nextStepLocationBtn = document.getElementById("nextStepLocation");
nextStepLocationBtn.addEventListener("click", function () {
  profilePhoto.style.display = "none";
  profilePicNav.style.background = "whitesmoke";
  locationCard.style.display = "inline-block";
  locationNav.style.background = "lightgray";
}); // LOCATION