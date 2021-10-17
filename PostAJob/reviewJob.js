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

const dataScienceAnalyticsDatalist = document.getElementById(
  "allDataScienceAnalyticsSpecialty"
);

for (let i = 0; i < DataScienceAnalyticsSpecialty.length; i++) {
  var option = document.createElement("option");

  //option.value = WritingSpecialty[i];
  option.innerText = DataScienceAnalyticsSpecialty[i];

  dataScienceAnalyticsDatalist.appendChild(option);
}

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
const webMobileDevDatalist = document.getElementById(
  "allWebMobileDevSpecialty"
);

for (let i = 0; i < WebMobileSoftwareSpecialty.length; i++) {
  var option = document.createElement("option");

  //option.value = WritingSpecialty[i];
  option.innerText = WebMobileSoftwareSpecialty[i];

  webMobileDevDatalist.appendChild(option);
}

//"Translation"
const TranslationSpecialty = [
  "Legal Translation",
  "Technical Translation",
  "Language Tutoring",
  "Translation",
  "Language Localization",
  "Medical Translation",
];

const translationDatalist = document.getElementById("allTranslationSpecialty");

for (let i = 0; i < TranslationSpecialty.length; i++) {
  var option = document.createElement("option");

  //option.value = WritingSpecialty[i];
  option.innerText = TranslationSpecialty[i];

  translationDatalist.appendChild(option);
}

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

const salesMarketingDatalist = document.getElementById(
  "allSalesMarketingSpecialty"
);

for (let i = 0; i < SalesMarketingSpecialty.length; i++) {
  var option = document.createElement("option");

  //option.value = WritingSpecialty[i];
  option.innerText = SalesMarketingSpecialty[i];

  salesMarketingDatalist.appendChild(option);
}

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

const legalDatalist = document.getElementById("allLegalSpecialty");

for (let i = 0; i < LegalSpecialty.length; i++) {
  var option = document.createElement("option");

  //option.value = WritingSpecialty[i];
  option.innerText = LegalSpecialty[i];

  legalDatalist.appendChild(option);
}

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
const itNetworkDatalist = document.getElementById("allItNetworkSpecialty");

for (let i = 0; i < ITNetworkingSpecialty.length; i++) {
  var option = document.createElement("option");

  //option.value = WritingSpecialty[i];
  option.innerText = ITNetworkingSpecialty[i];

  itNetworkDatalist.appendChild(option);
}

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

const engineeringArchitectureDatalist = document.getElementById(
  "allEngineeringArchitectureSpecialty"
);

for (let i = 0; i < EngineeringArchitectureSpeciality.length; i++) {
  var option = document.createElement("option");

  //option.value = WritingSpecialty[i];
  option.innerText = EngineeringArchitectureSpeciality[i];

  engineeringArchitectureDatalist.appendChild(option);
}

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

const accoutingConsultingDatalist = document.getElementById(
  "allAccoutingConsultingSpecialty"
);

for (let i = 0; i < AccountingConsultingSpecialty.length; i++) {
  var option = document.createElement("option");

  //option.value = WritingSpecialty[i];
  option.innerText = AccountingConsultingSpecialty[i];

  accoutingConsultingDatalist.appendChild(option);
}

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

const designCreativeDatalist = document.getElementById(
  "allDesignCreativeSpecialty"
);

for (let i = 0; i < DesignCreativeSpecialty.length; i++) {
  var option = document.createElement("option");

  //option.value = WritingSpecialty[i];
  option.innerText = DesignCreativeSpecialty[i];

  designCreativeDatalist.appendChild(option);
}

//"Admin Support"
const AdminSupportSpecialty = [
  "Virtual/Administrative Assistance",
  "Data Entry",
  "Project Management",
  "Transcription",
  "Order Processing",
  "Online Research",
];

const adminSupportDatalist = document.getElementById(
  "allAdminSupportSpecialty"
);

for (let i = 0; i < AdminSupportSpecialty.length; i++) {
  var option = document.createElement("option");

  //option.value = WritingSpecialty[i];
  option.innerText = AdminSupportSpecialty[i];

  adminSupportDatalist.appendChild(option);
}

//"Customer Service"
const CustomerServiceSpecialty = ["Customer Service", "Tech Support "];

const customerServiceDatalist = document.getElementById(
  "allCustomerServiceSpecialty"
);

for (let i = 0; i < CustomerServiceSpecialty.length; i++) {
  var option = document.createElement("option");

  //option.value = WritingSpecialty[i];
  option.innerText = CustomerServiceSpecialty[i];

  customerServiceDatalist.appendChild(option);
}

// Adding functionality to the edit category
const categorySelect = document.getElementById("categoryID");

// Get all specialty cards
const accoutingConsultingSpecialtyCard = document.querySelector(
  ".accoutingConsultingSpecialtyCard"
);
const adminSupportSpecialtyCard = document.querySelector(
  ".adminSupportSpecialtyCard"
);
const customerServiceSpecialtyCard = document.querySelector(
  ".customerServiceSpecialtyCard"
);
const dataScienceAnalyticsSpecialtyCard = document.querySelector(
  ".dataScienceAnalyticsSpecialtyCard"
);
const designCreativeSpecialtyCard = document.querySelector(
  ".designCreativeSpecialtyCard"
);
const engineeringArchitectureSpecialtyCard = document.querySelector(
  ".engineeringArchitectureSpecialtyCard"
);
const itNetworkSpecialtyCard = document.querySelector(
  ".itNetworkSpecialtyCard"
);
const legalSpecialtyCard = document.querySelector(".legalSpecialtyCard");

const salesMarketingSpecialtyCard = document.querySelector(
  ".salesMarketingSpecialtyCard"
);
const translationSpecialtyCard = document.querySelector(
  ".translationSpecialtyCard"
);
const webMobileDevSpecialtyCard = document.querySelector(
  ".webMobileDevSpecialtyCard"
);
const writingSpecialtyCard = document.querySelector(".writingSpecialtyCard");

const e = document.getElementById("categoryID");
e.addEventListener("input", () => {
  var value = e.options[e.selectedIndex].value;
  var text = e.options[e.selectedIndex].text;

  //console.log(text);

  if (text == "Accounting & Consulting") {
    accoutingConsultingSpecialtyCard.style.display = "inline-block";
    adminSupportSpecialtyCard.style.display = "none";
    customerServiceSpecialtyCard.style.display = "none";
    dataScienceAnalyticsSpecialtyCard.style.display = "none";
    designCreativeSpecialtyCard.style.display = "none";
    engineeringArchitectureSpecialtyCard.style.display = "none";
    itNetworkSpecialtyCard.style.display = "none";
    legalSpecialtyCard.style.display = "none";
    salesMarketingSpecialtyCard.style.display = "none";
    translationSpecialtyCard.style.display = "none";
    webMobileDevSpecialtyCard.style.display = "none";
    writingSpecialtyCard.style.display = "none";
  } else if (text == "Admin Support") {
    accoutingConsultingSpecialtyCard.style.display = "none";
    adminSupportSpecialtyCard.style.display = "inline-block";
    customerServiceSpecialtyCard.style.display = "none";
    dataScienceAnalyticsSpecialtyCard.style.display = "none";
    designCreativeSpecialtyCard.style.display = "none";
    engineeringArchitectureSpecialtyCard.style.display = "none";
    itNetworkSpecialtyCard.style.display = "none";
    legalSpecialtyCard.style.display = "none";
    salesMarketingSpecialtyCard.style.display = "none";
    translationSpecialtyCard.style.display = "none";
    webMobileDevSpecialtyCard.style.display = "none";
    writingSpecialtyCard.style.display = "none";
  } else if (text == "Customer Service") {
    accoutingConsultingSpecialtyCard.style.display = "none";
    adminSupportSpecialtyCard.style.display = "none";
    customerServiceSpecialtyCard.style.display = "inline-block";
    dataScienceAnalyticsSpecialtyCard.style.display = "none";
    designCreativeSpecialtyCard.style.display = "none";
    engineeringArchitectureSpecialtyCard.style.display = "none";
    itNetworkSpecialtyCard.style.display = "none";
    legalSpecialtyCard.style.display = "none";
    salesMarketingSpecialtyCard.style.display = "none";
    translationSpecialtyCard.style.display = "none";
    webMobileDevSpecialtyCard.style.display = "none";
    writingSpecialtyCard.style.display = "none";
  } else if (text == "Data Science & Analytics") {
    accoutingConsultingSpecialtyCard.style.display = "none";
    adminSupportSpecialtyCard.style.display = "none";
    customerServiceSpecialtyCard.style.display = "none";
    dataScienceAnalyticsSpecialtyCard.style.display = "inline-block";
    designCreativeSpecialtyCard.style.display = "none";
    engineeringArchitectureSpecialtyCard.style.display = "none";
    itNetworkSpecialtyCard.style.display = "none";
    legalSpecialtyCard.style.display = "none";
    salesMarketingSpecialtyCard.style.display = "none";
    translationSpecialtyCard.style.display = "none";
    webMobileDevSpecialtyCard.style.display = "none";
    writingSpecialtyCard.style.display = "none";
  } else if (text == "Design & Creative") {
    accoutingConsultingSpecialtyCard.style.display = "none";
    adminSupportSpecialtyCard.style.display = "none";
    customerServiceSpecialtyCard.style.display = "none";
    dataScienceAnalyticsSpecialtyCard.style.display = "none";
    designCreativeSpecialtyCard.style.display = "inline-block";
    engineeringArchitectureSpecialtyCard.style.display = "none";
    itNetworkSpecialtyCard.style.display = "none";
    legalSpecialtyCard.style.display = "none";
    salesMarketingSpecialtyCard.style.display = "none";
    translationSpecialtyCard.style.display = "none";
    webMobileDevSpecialtyCard.style.display = "none";
    writingSpecialtyCard.style.display = "none";
  } else if (text == "Engineering & Architecture") {
    accoutingConsultingSpecialtyCard.style.display = "none";
    adminSupportSpecialtyCard.style.display = "none";
    customerServiceSpecialtyCard.style.display = "none";
    dataScienceAnalyticsSpecialtyCard.style.display = "none";
    designCreativeSpecialtyCard.style.display = "none";
    engineeringArchitectureSpecialtyCard.style.display = "inline-block";
    itNetworkSpecialtyCard.style.display = "none";
    legalSpecialtyCard.style.display = "none";
    salesMarketingSpecialtyCard.style.display = "none";
    translationSpecialtyCard.style.display = "none";
    webMobileDevSpecialtyCard.style.display = "none";
    writingSpecialtyCard.style.display = "none";
  } else if (text == "IT & Networking") {
    accoutingConsultingSpecialtyCard.style.display = "none";
    adminSupportSpecialtyCard.style.display = "none";
    customerServiceSpecialtyCard.style.display = "none";
    dataScienceAnalyticsSpecialtyCard.style.display = "none";
    designCreativeSpecialtyCard.style.display = "none";
    engineeringArchitectureSpecialtyCard.style.display = "none";
    itNetworkSpecialtyCard.style.display = "inline-block";
    legalSpecialtyCard.style.display = "none";
    salesMarketingSpecialtyCard.style.display = "none";
    translationSpecialtyCard.style.display = "none";
    webMobileDevSpecialtyCard.style.display = "none";
    writingSpecialtyCard.style.display = "none";
  } else if (text == "Legal") {
    accoutingConsultingSpecialtyCard.style.display = "none";
    adminSupportSpecialtyCard.style.display = "none";
    customerServiceSpecialtyCard.style.display = "none";
    dataScienceAnalyticsSpecialtyCard.style.display = "none";
    designCreativeSpecialtyCard.style.display = "none";
    engineeringArchitectureSpecialtyCard.style.display = "none";
    itNetworkSpecialtyCard.style.display = "none";
    legalSpecialtyCard.style.display = "inline-block";
    salesMarketingSpecialtyCard.style.display = "none";
    translationSpecialtyCard.style.display = "none";
    webMobileDevSpecialtyCard.style.display = "none";
    writingSpecialtyCard.style.display = "none";
  } else if (text == "Sales & Marketing") {
    accoutingConsultingSpecialtyCard.style.display = "none";
    adminSupportSpecialtyCard.style.display = "none";
    customerServiceSpecialtyCard.style.display = "none";
    dataScienceAnalyticsSpecialtyCard.style.display = "none";
    designCreativeSpecialtyCard.style.display = "none";
    engineeringArchitectureSpecialtyCard.style.display = "none";
    itNetworkSpecialtyCard.style.display = "none";
    legalSpecialtyCard.style.display = "none";
    salesMarketingSpecialtyCard.style.display = "inline-block";
    translationSpecialtyCard.style.display = "none";
    webMobileDevSpecialtyCard.style.display = "none";
    writingSpecialtyCard.style.display = "none";
  } else if (text == "Translation") {
    accoutingConsultingSpecialtyCard.style.display = "none";
    adminSupportSpecialtyCard.style.display = "none";
    customerServiceSpecialtyCard.style.display = "none";
    dataScienceAnalyticsSpecialtyCard.style.display = "none";
    designCreativeSpecialtyCard.style.display = "none";
    engineeringArchitectureSpecialtyCard.style.display = "none";
    itNetworkSpecialtyCard.style.display = "none";
    legalSpecialtyCard.style.display = "none";
    salesMarketingSpecialtyCard.style.display = "none";
    translationSpecialtyCard.style.display = "inline-block";
    webMobileDevSpecialtyCard.style.display = "none";
    writingSpecialtyCard.style.display = "none";
  } else if (text == "Web, Mobile & Software Dev") {
    accoutingConsultingSpecialtyCard.style.display = "none";
    adminSupportSpecialtyCard.style.display = "none";
    customerServiceSpecialtyCard.style.display = "none";
    dataScienceAnalyticsSpecialtyCard.style.display = "none";
    designCreativeSpecialtyCard.style.display = "none";
    engineeringArchitectureSpecialtyCard.style.display = "none";
    itNetworkSpecialtyCard.style.display = "none";
    legalSpecialtyCard.style.display = "none";
    salesMarketingSpecialtyCard.style.display = "none";
    translationSpecialtyCard.style.display = "none";
    webMobileDevSpecialtyCard.style.display = "inline-block";
    writingSpecialtyCard.style.display = "none";
  } else if (text == "Writing") {
    accoutingConsultingSpecialtyCard.style.display = "none";
    adminSupportSpecialtyCard.style.display = "none";
    customerServiceSpecialtyCard.style.display = "none";
    dataScienceAnalyticsSpecialtyCard.style.display = "none";
    designCreativeSpecialtyCard.style.display = "none";
    engineeringArchitectureSpecialtyCard.style.display = "none";
    itNetworkSpecialtyCard.style.display = "none";
    legalSpecialtyCard.style.display = "none";
    salesMarketingSpecialtyCard.style.display = "none";
    translationSpecialtyCard.style.display = "none";
    webMobileDevSpecialtyCard.style.display = "none";
    writingSpecialtyCard.style.display = "inline-block";
  }
});

const currentCategorySpan = document.getElementById("currentCategory");
currentCategorySpan.innerText = localStorage.getItem("category");

const a = document.getElementById("allAccoutingConsultingSpecialty");
a.addEventListener("input", () => {
  var value = a.options[a.selectedIndex].value;
  var text = a.options[a.selectedIndex].text;
  currentCategorySpan.innerText = text;

  localStorage.setItem("category", text);
});
const b = document.getElementById("allAdminSupportSpecialty");
b.addEventListener("input", () => {
  var value = b.options[b.selectedIndex].value;
  var text = b.options[b.selectedIndex].text;
  currentCategorySpan.innerText = text;

  localStorage.setItem("category", text);
});
const c = document.getElementById("allCustomerServiceSpecialty");
c.addEventListener("input", () => {
  var value = c.options[c.selectedIndex].value;
  var text = c.options[c.selectedIndex].text;
  currentCategorySpan.innerText = text;

  localStorage.setItem("category", text);
});
const d = document.getElementById("allDataScienceAnalyticsSpecialty");
d.addEventListener("input", () => {
  var value = d.options[d.selectedIndex].value;
  var text = d.options[d.selectedIndex].text;
  currentCategorySpan.innerText = text;

  localStorage.setItem("category", text);
});
const f = document.getElementById("allDataScienceAnalyticsSpecialty");
f.addEventListener("input", () => {
  var value = f.options[f.selectedIndex].value;
  var text = f.options[f.selectedIndex].text;
  currentCategorySpan.innerText = text;

  localStorage.setItem("category", text);
});
const g = document.getElementById("allDesignCreativeSpecialty");
g.addEventListener("input", () => {
  var value = g.options[g.selectedIndex].value;
  var text = g.options[g.selectedIndex].text;
  currentCategorySpan.innerText = text;

  localStorage.setItem("category", text);
});
const h = document.getElementById("allEngineeringArchitectureSpecialty");
h.addEventListener("input", () => {
  var value = h.options[h.selectedIndex].value;
  var text = h.options[h.selectedIndex].text;
  currentCategorySpan.innerText = text;

  localStorage.setItem("category", text);
});
const i = document.getElementById("allItNetworkSpecialty");
i.addEventListener("input", () => {
  var value = i.options[i.selectedIndex].value;
  var text = i.options[i.selectedIndex].text;
  currentCategorySpan.innerText = text;

  localStorage.setItem("category", text);
});
const j = document.getElementById("allLegalSpecialty");
j.addEventListener("input", () => {
  var value = j.options[j.selectedIndex].value;
  var text = j.options[j.selectedIndex].text;
  currentCategorySpan.innerText = text;

  localStorage.setItem("category", text);
});
const k = document.getElementById("allSalesMarketingSpecialty");
k.addEventListener("input", () => {
  var value = k.options[k.selectedIndex].value;
  var text = k.options[k.selectedIndex].text;
  currentCategorySpan.innerText = text;

  localStorage.setItem("category", text);
});
const l = document.getElementById("allTranslationSpecialty");
l.addEventListener("input", () => {
  var value = l.options[l.selectedIndex].value;
  var text = l.options[l.selectedIndex].text;
  currentCategorySpan.innerText = text;

  localStorage.setItem("category", text);
});
const m = document.getElementById("allWebMobileDevSpecialty");
m.addEventListener("input", () => {
  var value = m.options[m.selectedIndex].value;
  var text = m.options[m.selectedIndex].text;
  currentCategorySpan.innerText = text;

  localStorage.setItem("category", text);
});
const n = document.getElementById("allWritingSpecialty");
n.addEventListener("input", () => {
  var value = n.options[n.selectedIndex].value;
  var text = n.options[n.selectedIndex].text;
  currentCategorySpan.innerText = text;

  localStorage.setItem("category", text);
});

const closeEditCategoryCard = document.getElementById("settingsOverlay");
const applyEdit = document.getElementById("applyEdit");
applyEdit.addEventListener("click", () => {
  closeEditCategoryCard.style.display = "none";
  const selectedCategory = (document.getElementById(
    "selectedCategory"
  ).innerText = localStorage.getItem("category"));
});
