import skills from './competences_data.js';

export function setSkills(type) {
    console.log(type);
    let html = "";
    skills[type].forEach((skill) => {
        html += `<div class="skill"> ${skill} </div>`;
    });
    document.querySelector(`.${type}`).innerHTML = html;
} 