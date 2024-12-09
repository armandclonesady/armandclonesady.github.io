const navLinks = document.querySelectorAll('.navlinks');
const contactSection = document.querySelector('#contact');
const projectItems = document.querySelectorAll('.project-item');
const projectDetail = document.querySelector('.projet-detail-item');
let projectJSON;

import setAllSkills from "./setInfo.js";

setAllSkills();


fetch('../res/projectInfo.json')
.then(response => response.json())
.then(json => json.info)
.then(info => { projectJSON = info;
});


console.log(projectJSON);


function setContact(contactSection) {
    const sections = contactSection.querySelectorAll(".contact");
    const section = sections[2];
    section.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = "https://www.linkedin.com/in/armand-sady-368992274/";
    });
}

function setCorrectInfo(projectTitle) {
    projectJSON.forEach((project) => {
        if (project.name == projectTitle) {
            const correctProject = project.values;
            console.log(correctProject);
            projectDetail.querySelector('.location').innerText = correctProject.lieu;
            projectDetail.querySelector('.date').innerText = correctProject.date;
            projectDetail.querySelector('.desc').innerText = correctProject.description;
            projectDetail.querySelector('.apprentissage').innerText = correctProject.apprentissage;
            projectDetail.querySelector('.tech').innerText = correctProject.tech;
            projectDetail.querySelector('.link').innerText = "Lien vers le projet";
            projectDetail.querySelector('.link').href = correctProject.link;
            return;
        }
    });
}

function removeText() {
    projectDetail.querySelector('h2').innerText = "";
    projectDetail.querySelector('.icon').src = "";
    projectDetail.querySelector('.link').innerHTML = "";
    projectDetail.querySelector('.desc').innerText = "";
    projectDetail.querySelector('.date').innerText = "";
    projectDetail.querySelector('.location').innerText = "";
    projectDetail.querySelector('.tech').innerText = "";

}

function showCorrectProject(projectTitle, project) {
    const currentProjectTitle = projectDetail.querySelector('h2');
    const holder = document.querySelector('.portfolio-content .content');
    if (holder.classList.contains('hidden')) {
        holder.classList.remove('hidden');
    } else if (currentProjectTitle.innerText == projectTitle) {
        removeText();
        holder.classList.add('hidden');
        return;
    }
    currentProjectTitle.innerText = projectTitle;
    projectDetail.querySelector('.icon').src = project.querySelector('.project-icon').src;
    setCorrectInfo(projectTitle);
}

function setProject() {
    projectItems.forEach((project) => {
        const clickable = project.querySelector('.see-more');
        clickable.addEventListener('click', (event) => {
            event.preventDefault();
            const projectTitle = project.querySelector('p').innerText;
            showCorrectProject(projectTitle, project);
            manageActive();
            project.classList.add('active');
        });
    });
}

function manageActive() {
    let project = document.querySelector('.projet-liste');
    project.querySelectorAll('.project-item').forEach((item) => {
        if (item.classList.contains('active')) {
            item.classList.remove('active');
        }
    })
}

window.addEventListener('load', (event) => {
    event.preventDefault();
    navLinks.forEach((link) => {
        link.classList.add("fade-in");
    })
})
setContact(contactSection);
setProject();