const currentTitle = localStorage.getItem("Job_Title");

const reviewJobTitle = (document.getElementById("currentTitleSpan").innerText =
  currentTitle);

const confirmTitle = document.getElementById("confirmTitle");
confirmTitle.addEventListener("click", () => {
  var ctSpan = document.getElementById("currentTitleSpan");
  //console.log(ctSpan.innerText);
  localStorage.setItem("Job_Title", ctSpan.innerText);
});

const currentCategory = localStorage.getItem("category");
const selectedCategory = (document.getElementById(
  "selectedCategory"
).innerText = currentCategory);

const currentScopeSize = localStorage.getItem("projectSize");
const currentScopeTime = localStorage.getItem("TimeScope");
const currentScopeExperience = localStorage.getItem("Experience");

const selectedScope = (document.getElementById("selectedScope").innerText =
  currentScopeSize
    .concat(" Size , ")
    .concat(currentScopeTime)
    .concat(", & ")
    .concat(currentScopeExperience)
    .concat(" experience."));

const currentBudget = localStorage.getItem("budget");
const selectedBudget = document.getElementById("selectedBudget");

selectedBudget.innerText = "$".concat(JSON.parse(currentBudget));

const currentLocation = localStorage.getItem("locations");
const selectedLocation = document.getElementById("selectedLocation");
selectedLocation.innerText = JSON.parse(currentLocation);

const currentSkills = localStorage.getItem("skills");
const selectedSkills = document.getElementById("selectedSkills");
selectedSkills.innerText = JSON.parse(currentSkills);

// Button cards
const backBtn = document.getElementById("back");
backBtn.addEventListener("click", () => {
  // Go to back a page
  window.location.href = "./PostBudget.html";
});
const cancelBtn = document.getElementById("cancel");
cancelBtn.addEventListener("click", () => {
  // Cancel the job
  window.location.href = "../ClientProfile/index.html";
});

//Require a job description
const jobDescription = document.getElementById("jobDescription");

const descriptionError = document.getElementById("descriptionError");

function countWords(str) {
  return str.trim().split(/\s+/).length;
}

const postJob = document.getElementById("postJob");
const wordCountDescription = document.getElementById("wordCount");
jobDescription.addEventListener("input", () => {
  var jobDescriptionLength = countWords(jobDescription.value);
  wordCountDescription.innerHTML = jobDescriptionLength;
  postJob.style.background = "#054e97";
  postJob.style.color = "white";
  postJob.style.cursor = "pointer";
  postJob.style.pointerEvents = "visible";

  if (jobDescriptionLength < 15) {
    descriptionError.style.display = "block";
  } else if (jobDescriptionLength > 5000) {
    descriptionError.innerHTML =
      `<i class="fa fa-exclamation-circle" aria-hidden="true"></i>`.concat(
        "The maximum word count is 5000."
      );
  } else {
    descriptionError.style.display = "none";
  }
});

postJob.addEventListener("click", () => {
  var jobDescriptionLength = countWords(jobDescription.value);
  if (jobDescriptionLength < 15) {
    descriptionError.style.display = "block";
  } else if (jobDescriptionLength > 5000) {
    descriptionError.innerHTML =
      `<i class="fa fa-exclamation-circle" aria-hidden="true"></i>`.concat(
        "The maximum word count is 5000."
      );
  } else {
    localStorage.setItem("jobDescription", jobDescription.value);
    window.location.href = "../ClientProfile/index.html";
  }
});

//"Accounting & Consulting'
const AccountingConsultingSpecialty = [
  "Business Analysis",
  "Management Consulting",
  "Instructional Design",
  "HR Administration",
  "Recruiting",
  "Training & Development",
  "Lifestyle Coaching",
  "Tax Preparation",
  "Bookkeeping",
  "Accounting",
  "Financial Management/CFO",
  "Financial Analysis & Modeling",
];

//"Admin Support"
const AdminSupportSpecialty = [
  "Virtual/Administrative Assistance",
  "Data Entry",
  "Project Management",
  "Transcription",
  "Order Processing",
  "Online Research",
];

//"Customer Service"
const CustomerServiceSpecialty = ["Customer Service", "Tech Support "];

//"Data Science & Analytics"
const DataScienceAnalyticsSpecialty = [
  "Data Mining",
  "Data Engineering",
  "Data Analytics",
  "Data Visualization",
  "Data Extraction",
  "Data Processing",
  "Deep Learning",
  "Knowledge Representation",
  "Machine Learning",
  "Experimentation & Testing",
  "A/B Testing",
];

//"Design & Creative",
const DesignCreativeSpecialty = [
  "Brand Identity Design",
  "Logo Design",
  "Singing",
  "Acting",
  "Voice Talent",
  "Visual Effects",
  "2D Animation",
  "Video Editing",
  "Video Production",
  "Motion Graphics",
  "Videography",
  "3D Animation",
  "Packaging Design",
  "Art Direction",
  "Image Editing",
  "Presentation Design",
  "Creative Direction",
  "Editorial Design",
  "Cartoons & Comics",
  "Pattern Design",
  "Fine Art",
  "Caricatures & Portraits",
  "Illustration",
  "Musician",
  "Music Composition",
  "Music Production",
  "Audio Editing",
  "Audio Production",
  "Fashion Design",
  "Jewelry Design",
  "Product & Industrial Design",
  "AR/VR Design",
  "Game Art",
  "Product Photography",
  "Local Photography ",
];

//"Engineering & Architecture
const EngineeringArchitectureSpeciality = [
  "Structural Engineering",
  "Building Information Modeling",
  "Civil Engineering",
  "3D Modeling & Rendering",
  "CAD",
  "Landscape Architecture",
  "Architecture",
  "Interior Design",
  "Trade Show Design",
  "Mechanical Engineering",
  "Chemical & Process Engineering",
  "STEM Tutoring",
  "Energy Engineering",
  "Electronic Engineering",
  "Electrical Engineering",
  "Physics",
  "Mathematics",
  "Biology",
  "Chemistry",
  "Logistics & Supply Chain Management",
  "Sourcing & Procurement",
];

//"IT & Networking"
const ITNetworkingSpecialty = [
  "Network Security",
  "IT Compliance",
  "Information Security",
  "Database Administration",
  "Cloud Engineering",
  "Solutions Architecture",
  "IT Support",
  "DevOps Engineering",
  "Business Applications Development",
  "Systems Engineering",
  "Systems Administration",
  "Network Administration",
];

//"Legal"
const LegalSpecialty = [
  "Business & Corporate Law",
  "General Counsel",
  "Tax Law",
  "Labor & Employment Law",
  "International Law",
  "Regulatory Law",
  "Securities & Finance Law",
  "Immigration Law",
  "Intellectual Property Law",
  "Paralegal",
];

//"Sales & Marketing"
const SalesMarketingSpecialty = [
  "Social Media Strategy",
  "Marketing Strategy",
  "Content Strategy",
  "Brand Strategy",
  "Public Relations",
  "Social Media Marketing",
  "Market Research",
  "Community Management",
  "Email Marketing",
  "Marketing Automation",
  "Campaign Management",
  "Digital Marketing",
  "Search Engine Optimization",
  "Telemarketing",
  "Search Engine Marketing",
  "Lead Generation",
  "Sales & Business Development",
];

//"Translation"
const TranslationSpecialty = [
  "Legal Translation",
  "Technical Translation",
  "Language Tutoring",
  "Translation",
  "Language Localization",
  "Medical Translation",
];

//"Web, Mobile & Software Dev"
const WebMobileSoftwareSpecialty = [
  "Ecommerce Development",
  "Desktop Software Development",
  "Scripting & Automation",
  "Manual Testing",
  "Automation Testing",
  "Mobile App Development",
  "Mobile Game Development",
  "Prototyping",
  "Mobile Design",
  "Web Design",
  "User Research",
  "UX/UI Design",
  "Firmware Development",
  "Emerging Tech",
  "AR/VR Development",
  "Coding Tutoring",
  "Database Development",
  "Scrum Master",
  "Product Management",
  "Back-End Development",
  "Front-End Development",
  "Full Stack Development",
  "CMS Development",
  "Game Development",
];

//"Writing"
const WritingSpecialty = [
  "Editing & Proofreading",
  "Career Coaching",
  "Scriptwriting",
  "Creative Writing",
  "Ghostwriting",
  "Grant Writing",
  "Technical Writing",
  "Writing Tutoring",
  "Business Writing",
  "Content Writing",
  "Copywriting",
];

const WritingSpecialtyDatalist = document.getElementById("allWritingSpecialty");

for (let i = 0; i < WritingSpecialty.length; i++) {
  var option = document.createElement("option");

  //option.value = WritingSpecialty[i];
  option.innerText = WritingSpecialty[i];

  WritingSpecialtyDatalist.appendChild(option);
}

const webMobileDevDatalist = document.getElementById(
  "allWebMobileDevSpecialty"
);

for (let i = 0; i < WebMobileSoftwareSpecialty.length; i++) {
  var option = document.createElement("option");

  //option.value = WritingSpecialty[i];
  option.innerText = WebMobileSoftwareSpecialty[i];

  webMobileDevDatalist.appendChild(option);
}

const translationDatalist = document.getElementById("allTranslationSpecialty");

for (let i = 0; i < TranslationSpecialty.length; i++) {
  var option = document.createElement("option");

  //option.value = WritingSpecialty[i];
  option.innerText = TranslationSpecialty[i];

  translationDatalist.appendChild(option);
}
