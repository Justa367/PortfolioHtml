// Project list

const projects = [
    {
        img: '/img/web-development.png',
        title: 'Website 1',
        description: "Description 1",
        tech: ["HTML", "CSS", "JS"],
        link: "https://www.youtube.com/",
    },
    {
        img: '/img/deep-learning.png',
        title: 'Yolo custom detection',
        description: "Description 2",
        tech: ["Python", "AI model", "Scikit-learn"],
        link: "https://www.youtube.com/",
    },
    {
        img: '/img/project.png',
        title: 'Python',
        description: "Description 3",
        tech: ["Python", "Django", "Django REST Framework", "SQLLite"],
        link: "https://www.youtube.com/",
    }

]

// Input from forms

const messageFormInput={
  name:name,
  email:email,
  subject:subject,
  message:message
};


// Show projects

const showProjects = (projectsToDisplay) => {
    const getProjectsElm = document.getElementById("projects-container");
    getProjectsElm.innerHTML = "";
    projectsToDisplay.forEach(project => {
        getProjectsElm.innerHTML += `
      <div class="project-card fade-in">
        <div class="project-image">
          <img src="${project.img}" alt="${project.title}" />
          <div class="project-overlay">
            <div class="project-links">
              <a class="project-link" href="${project.link}" target="_blank">GitHub</a>
            </div>
          </div>
        </div>
        <div class="project-content">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description}</p>
          <div class="project-tech">
            ${project.tech.map(tag => `<span class="tech-tag">${tag}</span>`).join("")}
          </div>
        </div>
      </div>
    `;
    });
};

showProjects(projects);

document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const filterValue = button.getAttribute('data-filter');
        const projectToShow = [];

        // first remove "active" class
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));

        // Add "active" to clicked button
        button.classList.add('active');

        projects.forEach(project => {
            const newTechTags = project.tech.map(tag =>
                tag.toLowerCase().replace(/\s+/g, '')
            );

            let hasAnyMatch = false;

            if (filterValue === "all") {
                hasAnyMatch = true;
            } else if (filterValue === "html-css-js") {
                const newTags = filterValue.split("-");
                hasAnyMatch = newTechTags.some(tag => newTags.includes(tag));
            } else {
                hasAnyMatch = newTechTags.includes(filterValue);
            }

            if (hasAnyMatch) {
                projectToShow.push(project);
            }
        });
        showProjects(projectToShow);
    });
});

//different solution
// const showFilteredProjects = (filter) => {
//     const getProjectsElm = document.getElementById("projects-container");
//     getProjectsElm.innerHTML = "";
//
//     projects.filter(project => {
//
 //         if (project.tech.map((x) => x?.toLowerCase()).includes(filter)) {
//             getProjectsElm.innerHTML += `
//                   <div class="project-card fade-in">
//                     <div class="project-image">
//                       <img src="${project.img}" alt="${project.title}" />
//                       <div class="project-overlay">
//                         <div class="project-links">
//                           <a class="project-link" href="${project.link}" target="_blank">GitHub</a>
//                         </div>
//                       </div>
//                     </div>
//                     <div class="project-content">
//                       <h3 class="project-title">${project.title}</h3>
//                       <p class="project-description">${project.description}</p>
//                       <div class="project-tech">
//                         ${project.tech.map(tag => `<span class="tech-tag">${tag}</span>`).join("")}
//                       </div>
//                     </div>
//                   </div>
//                 `;
//         }
//
//         if (filter === "all") {
//             getProjectsElm.innerHTML += `
//                   <div class="project-card fade-in">
//                     <div class="project-image">
//                       <img src="${project.img}" alt="${project.title}" />
//                       <div class="project-overlay">
//                         <div class="project-links">
//                           <a class="project-link" href="${project.link}" target="_blank">GitHub</a>
//                         </div>
//                       </div>
//                     </div>
//                     <div class="project-content">
//                       <h3 class="project-title">${project.title}</h3>
//                       <p class="project-description">${project.description}</p>
//                       <div class="project-tech">
//                         ${project.tech.map(tag => `<span class="tech-tag">${tag}</span>`).join("")}
//                       </div>
//                     </div>
//                   </div>
//                 `;
//         }
//
//     });
// };

// Email Validation on blure
const emailInput = document.getElementById("email");

// Without regex (mostly)
/*
emailInput.addEventListener("blur", ()=>{

  const withoutSpaces=emailInput.value.replace(/\s+/g, "");
  const email=withoutSpaces.trim();

  const atIndex = email.indexOf('@');
  const dotIndex = email.lastIndexOf('.');

  // Sth in front of @,  dott after @ not next to, sth after dot
  const isValid=atIndex>0 && dotIndex>atIndex+1&&dotIndex<email.length -1;
  
  alert(isValid ? 'Valid Email Address' : 'Invalid Email Address');
  console.log(isValid);
})*/

// As function with html eventhandler onchange
function validateEmail(inputElement) {
  const withoutSpaces = inputElement.value.replace(/\s+/g, "");
  const email = withoutSpaces.trim();

  const atIndex = email.indexOf('@');
  const dotIndex = email.lastIndexOf('.');

  const isValid = atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1;

  const messageElement=document.getElementById("emailMessage");
  messageElement.textContent=isValid? "Correct email":"Invalid email";
  messageElement.className = "error-message " + (isValid ? "valid" : "invalid");

  return isValid;
}


// Using regex
/*
emailInput.addEventListener("blur", () => {

  const email = emailInput.value.trim();

  //^ -> beginning of an input, [^\s@] -> Everything but without sings in bracket, \. -> dot must be there $ -> end of an input
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      emailInput.classList.add("input-error");
      alert("Insert correct email.");
    } else {
      emailInput.classList.remove("input-error");
    }
});*/


// Displaying inserted values in forms 
function readFormData(event){
  event.preventDefault()
  const nameInput=document.getElementById("name").value;
  const emailInput=document.getElementById("email").value;
  const subjectInput=document.getElementById("subject").value;
  const messageInput=document.getElementById("message").value;
  console.log({
    name:nameInput,
    email:emailInput,
    subjcet:subjectInput,
    message:messageInput
  });
}

// Smooth scrolling to project or contact section using button tag

// With onclick
function scrollToSection(selector){
  document.querySelector(selector).scrollIntoView();
}

// Without onclick
/*
document.getElementById("scrollToProjects").addEventListener("click", () => {
  document.querySelector("#projects").scrollIntoView();
});

document.getElementById("scrollToContact").addEventListener("click", () => {
  document.querySelector("#contact").scrollIntoView();
});
*/

function showMobileMenu() {
  const mobileMenu = document.getElementById("navgMenu"); // Taking mobbile menu elements
  const desktopMenu = document.querySelector(".navg-menu"); // Taking desktop menu elements

  // Chacking if mobile menu is empty
  if (mobileMenu.innerHTML === "") {
    mobileMenu.innerHTML = desktopMenu.innerHTML;
  }

  mobileMenu.classList.toggle("hidden");
}




