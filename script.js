// Project list

const projects = [
    //TODO:
    {
        //TODO:
        img: '/img/web-development.png',
        title: 'Website 1',
        description: "Description 1",
        tech: ["HTML", "CSS", "JS"],
        link: "https://www.youtube.com/",
    },
    {
        //TODO:
        img: '/img/deep-learning.png',
        title: 'Yolo custom detection',
        description: "Description 2",
        tech: ["Python", "AI model", "Scikit-learn"],
        link: "https://www.youtube.com/",
    },
    {
        //TODO:
        img: '/img/project.png',
        title: 'Python',
        description: "Description 3",
        tech: ["Python", "Django", "Django REST Framework", "SQLLite"],
        link: "https://www.youtube.com/",
    }

]
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


//TODO: Change styles for clicked and not clicked buttons
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const filterValue = button.getAttribute('data-filter');
        const projectToShow = [];

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



