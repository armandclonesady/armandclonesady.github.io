import skills from './data/competences_data.js';

function setSkills(type) {
    console.log(type);
    let html = "";
    skills[type].forEach((skill) => {
        html += `<div class="skill"> ${skill} </div>`;
    });
    document.querySelector(`.${type}`).innerHTML = html;
} 


export default function setAllSkills() {
    for (const [key, value] of Object.entries(skills)) {
        setSkills(key);
    }
}