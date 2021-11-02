//Conatiners
const start = document.querySelector(".start");
const expertise = document.querySelector(".expertise");
const education = document.querySelector(".education");
const employment = document.querySelector(".employment");
const hourlyRate = document.querySelector(".hourlyRate");
const titleDescription = document.querySelector(".titleDescription");
const profilePhoto = document.querySelector(".profilePhoto");
const locationCard = document.querySelector(".locationCard");

//Side Nav
const expertiseNav = document.getElementById("expertiseNav");
const linkeninNav = document.getElementById("linkeninNav");
const educationNav = document.getElementById("educationNav");
const employmentNav = document.getElementById("employmentNav");
const payRateNav = document.getElementById("payRateNav");
const titleNav = document.getElementById("titleNav");
const profilePicNav = document.getElementById("profilePicNav");
const locationNav = document.getElementById("locationNav");

//Buttons
const skipBtn = document.getElementById("skipStep");

skipBtn.addEventListener("click", () => {
  expertise.style.display = "block";
  start.style.display = "none";
  expertiseNav.style.background = "lightgray";
  linkeninNav.style.background = "whitesmoke";
});

// Next Button for start
const nextBtn = document.getElementById("nextStep");
nextBtn.addEventListener("click", () => {
  expertise.style.display = "block";
  start.style.display = "none";
  expertiseNav.style.background = "lightgray";
  linkeninNav.style.background = "whitesmoke";
});

// EXPERTISE CARD
const backToLinkedInBTN = document.getElementById("backToLinkedIn");
backToLinkedInBTN.addEventListener("click", () => {
  expertise.style.display = "none";
  start.style.display = "inline-block";
  expertiseNav.style.background = "whitesmoke";
  linkeninNav.style.background = "lightgray";
});

const nextStepEducationBtn = document.getElementById("nextStepEducation");
nextStepEducationBtn.addEventListener("click", () => {
  expertise.style.display = "none";
  education.style.display = "inline-block";
  expertiseNav.style.background = "whitesmoke";
  educationNav.style.background = "lightgray";
});

// EDUCATION CARD
const backToExpertiseBtn = document.getElementById("backToExpertise");
backToExpertiseBtn.addEventListener("click", () => {
  expertise.style.display = "inline-block";
  education.style.display = "none";
  expertiseNav.style.background = "lightgray";
  educationNav.style.background = "whitesmoke";
});

const nextStepEmploymentBtn = document.getElementById("nextStepEmployment");
nextStepEmploymentBtn.addEventListener("click", () => {
  education.style.display = "none";
  employment.style.display = "inline-block";
  educationNav.style.background = "whitesmoke";
  employmentNav.style.background = "lightgray";
});

// Employment Card
const backToEducationBtn = document.getElementById("backToEducation");
backToEducationBtn.addEventListener("click", () => {
  employment.style.display = "none";
  education.style.display = "inline-block";
  educationNav.style.background = "lightgray";
  employmentNav.style.background = "whitesmoke";
});

const nextStepPayRateBtn = document.getElementById("nextStepPayRate");
nextStepPayRateBtn.addEventListener("click", () => {
  employment.style.display = "none";
  hourlyRate.style.display = "inline-block";
  payRateNav.style.background = "lightgray";
  employmentNav.style.background = "whitesmoke";
});

//HOURLY RATE

const nextStepTitleBtn = document.getElementById("nextStepTitle");
nextStepTitleBtn.addEventListener("click", () => {
  hourlyRate.style.display = "none";
  payRateNav.style.background = "whitesmoke";
  titleDescription.style.display = "inline-block";
  titleNav.style.background = "lightgray";
});

// TITLE AND DESCRIPTION

const nextStepProfilePhotoBtn = document.getElementById("nextStepProfilePhoto");
nextStepProfilePhotoBtn.addEventListener("click", () => {
  titleDescription.style.display = "none";
  titleNav.style.background = "whitesmoke";
  profilePhoto.style.display = "inline-block";
  profilePicNav.style.background = "lightgray";
});

// PROFILE PHOTO

const nextStepLocationBtn = document.getElementById("nextStepLocation");
nextStepLocationBtn.addEventListener("click", () => {
  profilePhoto.style.display = "none";
  profilePicNav.style.background = "whitesmoke";
  locationCard.style.display = "inline-block";
  locationNav.style.background = "lightgray";
});

// LOCATION
