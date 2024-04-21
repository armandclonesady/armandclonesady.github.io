const navLinks = document.querySelectorAll('.navlinks');
const contactSection = document.querySelector('#contact');
const projectItems = document.querySelectorAll('.project-item');
const projectDetail = document.querySelector('.projet-detail-item');

function setContact(contactSection) {
    const sections = contactSection.querySelectorAll(".contact");
    const section = sections[2];
    section.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = "https://www.linkedin.com/in/armand-sady-368992274/";
    });
}

function ugliestFunctionEverButILikeIt(projectTitle) {
    const linkText = "Lien vers le projet";
    let descriptionText = "";
    let dateText = "";
    let locationText = "IUT Info - Villeneuve d'Ascq";
    let techText = "";
    switch (projectTitle) {
        case "Les As du CROUS":
            console.log("Les As du CROUS");
            projectDetail.querySelector('.link').href = "https://github.com/armandclonesady/As-Du-Crous";
            dateText = "Septembre 2023";
            descriptionText = `
            Jeu développé en java sur 3 jours en groupe de 5 étudiants. Ce projet consistait a la création d'un jeu se jouait uniquement sur le terminal de la machine,
            mais le contenu du jeu était secondaire a la méthode agile SCRUM que nous avons appris.

            Lors de ce projet j'ai eu l'occasion de travailler en équipe avec des inconnues, de travailler avec un temps bien plus réduit que d'habitude,
            et de pratiquer la méthode agile SCRUM, utilisée en entreprise.`;
            techText = "Java";
            break;
        case "Voyage Scolaire International":
            console.log("Voyage Scolaire International");
            projectDetail.querySelector('.link').href = "https://github.com/armandclonesady/voyage-etranger";
            dateText = "Avril 2023 - Juin 2023";
            descriptionText = `
            Application sous JavaFX permettant de gérer la consistution de bînomes d'élèves selon leurs préférances pour des échanges scolaire.
            Ce projet a été réalisé en groupe de 3 étudiants lors de ma première année a l'IUT, et été un bon moyen de travailler avec JavaFX et en groupe.

            Lors de ce projet j'ai eu l'occasion de travailler en groupe, de développé mes connaissances en JavaFX ainsi qu'en Java. Les algorithmes de recherches tel que Dijkstra ont été utilisé pour la recherche des bînomes.
            `;
            techText = "Java, JavaFX";
            break;
        case "JO Analyse statistique":
            console.log("JO Analyse statistique");
            projectDetail.querySelector('.link').href = "https://github.com/armandclonesady/jo-olympique";
            dateText = "Septembre 2023 - Janvier 2024";
            descriptionText = `
            Ce projet, fait en bînomes, était un peu différent des autres, car la partie informatique, bien que présente, n'était pas la plus importante.
            Cette dernière consistait a créer une base de donnée sous SQL
            a partir d'une liste de tous les participants aux JO depuis leur première éditions modernes a 2016.
            La plus grande partie était l'analyse statistique des données, et la création de graphiques pour les présenter.

            Lors de ce projet j'ai eu l'occasion de partir de 0 et de créer une base de donnée simple a naviguer, ainsi que de travailler avec des données réelles, de les analyser et de les présenter de manière claire et concise.
            `;
            techText = "SQL";
            break;
        case "Chasse aux monstres":
            console.log("Chasse aux monstres");
            projectDetail.querySelector('.link').href = "https://github.com/armandclonesady/chasse-au-monstre";
            dateText = "Avril 2023 - Juin 2023";
            descriptionText = `
            La chasse aux monstres est un projet se déroulant sur l'entièretée du semestre 3, ayant pour but de nous faire approfondir notre connaissance du JavaFX, de l'algorithmie et du travail d'équipe
            Le projet se présente sous forme de jeu de plateau en 1 contre 1, où un joueur doit tirer sur des cases du plateau, tandis que l'autre joueur dois se déplacer et éviter les tirs. Le plateau est un labyrinthe généré automatiquement.
            `;
            break;
        case "API Pizzeria":
            console.log("API Pizzeria");
            projectDetail.querySelector('.link').href = "https://github.com/armandclonesady/api-pizza";
            dateText = "Fevrier 2024 - Mars 2024";
            descriptionText = `
            Ce projet consista a créer une API (interface de programmation d'application) permettant, avec des requêtes HTTP, d'altérer une base de données. On peut modifier les ingrédients, ajouter des pizzas ou ajouter des commandes de pizza depuis cette API.
            `;
            break;
        case "Steredeux":
            console.log("Steredeux");
            projectDetail.querySelector('.link').href = "https://github.com/armandclonesady/jsae";
            dateText = "Fevrier 2024 - Avril 2024";
            descriptionText = `
            Ce projet, qui dura 3 mois, nous a donné l'occasion de créer un jeu vidéo sur le web, en réseau. Le but du jeu était de survivre le plus longtemps, avec des vagues d'ennemies apparaissant réguliérement.
            `;
            break;
    }
    projectDetail.querySelector('.link').innerHTML = linkText;
    projectDetail.querySelector('.desc').innerText = descriptionText;
    projectDetail.querySelector('.date').innerText = dateText;
    projectDetail.querySelector('.location').innerText = locationText;
    projectDetail.querySelector('.tech').innerText = techText;
}

function removeText() {
    projectDetail.querySelector('h2').innerText = "";
    projectDetail.querySelector('.icon').src = "";
    projectDetail.querySelector('.link').innerHTML = "";
    projectDetail.querySelector('.desc').innerText = "";
    projectDetail.querySelector('.date').innerText = "";
    projectDetail.querySelector('.location').innerText = "";
    projectDetail.querySelector('.tech').innerText = "";
    projectDetail.classList.add('hidden');

}

function showCorrectProject(projectTitle, project) {
    const currentProjectTitle = projectDetail.querySelector('h2');
    const holder = document.querySelector('.portfolio-content .content');
    console.log(`${currentProjectTitle.innerText == projectTitle}`);
    if (holder.classList.contains('hidden')) {
        holder.classList.remove('hidden');
    } else if (currentProjectTitle.innerText == projectTitle) {
        removeText();
        holder.classList.add('hidden');
        return;
    }
    currentProjectTitle.innerText = projectTitle;
    projectDetail.querySelector('.icon').src = project.querySelector('.project-icon').src;
    ugliestFunctionEverButILikeIt(projectTitle);
}

function setProject() {
    console.log(projectItems);
    projectItems.forEach((project) => {
        const clickable = project.querySelector('.see-more');
        clickable.addEventListener('click', (event) => {
            event.preventDefault();
            const projectTitle = project.querySelector('p').innerText;
            showCorrectProject(projectTitle, project);
        });
    });
}

window.addEventListener('load', (event) => {
    event.preventDefault();
    navLinks.forEach((link) => {
        link.classList.add("fade-in");
    })
})
setContact(contactSection);
setProject();