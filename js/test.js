window.onscroll = function() { scrollFunction() };
window.onload = function() { 
    navTextFadeIn()
};
let count = 1;
let transitionTimeNav = 0.5;
let currentlyOppened = 0;

function countDown() {
    let currentVal = document.getElementById("cdb").textContent;
    let newVal = currentVal - 1;
    document.getElementById("cdb").textContent = newVal;
    return;

}

function imageRotation(String, bool) {
    let home = document.getElementById(String);
    if (bool) {
        home.style.transform = "rotate(360deg)";
        home.style.transition = "transform 1s";

    } else {
        home.style.transform = "rotate(0deg)";
        home.style.transition = "transform 1s";
        return;
    }
}

function scrollFunction() {
    let nav = document.getElementById("nav");
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) { // Quand on n'est plus en haut de la page
        nav.style.maxHeight = "3rem";
        iconDezoom();
    } else { // Quand on est en haut de la page
        nav.style.maxHeight = "10rem";
        iconZoom();
    }
    nav.style.transition = "all "+transitionTimeNav+"s";
    return;
}

function iconDezoom() {
    let icon = document.getElementById("icon");
    icon.style.maxHeight = "4rem";
    icon.style.maxWidth = "4rem";
    icon.style.transition = "all "+transitionTimeNav+"s";
}

function iconZoom() {
    let icon = document.getElementById("icon");
    icon.style.maxHeight = "6rem";
    icon.style.maxWidth = "6rem";
    icon.style.transition = "all "+transitionTimeNav+"s";

}

function zoom(String) {
    count++;
    revealCount(true);
    if (count == 2) {
        setTimeout(function(){resetScore()}, 5000);
    } if (count == 1) {
        revealCount(false);
    }
    let image = document.getElementById(String);
    image.style.transform = "scale("+count * count+")";
    image.style.transition = "transform 0.2s ease";
    countValue.textContent = count-1;
    return;
}

function resetScore() {
    count = 0;
    let image = document.getElementById(String);
    image.style.transform = "scale("+count * count+")";
    image.style.transition = "transform 0.2s ease";
    countValue.textContent = count;
    return;
}

function revealCount(bool) {
    let countDiv = document.getElementById("count");
    if (bool) {
        countDiv.style.display = 'block';
    } else {
        countDiv.style.display = 'none';
    }
    return;
}

function navTextFadeIn() {
    let nav = document.getElementById("nav");
    for (let i = 0; i < nav.children.length; i++) {
        nav.children[i].style.color = "rgb(242, 233, 228)";
        nav.children[i].style.transition = "color 2s";
        if (nav.children[i].getAttribute("class") == "navLink") {
        nav.children[i].setAttribute("onmouseenter", 'underline(\''+nav.children[i].getAttribute("id")+'\', true)');
        nav.children[i].setAttribute("onmouseleave", 'underline(\''+nav.children[i].getAttribute("id")+'\', false)');
        } else if (nav.children[i].getAttribute("class") == "navLinkContainer") {
            for (let j = 0; j < nav.children[i].children.length; j++) {
                nav.children[i].children[j].setAttribute("onmouseenter", 'underline(\''+nav.children[i].children[j].getAttribute("id")+'\', true)');
                nav.children[i].children[j].setAttribute("onmouseleave", 'underline(\''+nav.children[i].children[j].getAttribute("id")+'\', false)');
            }
        }
    }
    return;
}

function textFadeIn(String, int) {
    let text = document.getElementById(String);
    text.style.color = "rgb(255, 195, 0)";
    text.style.transition = "color "+int+"s";
    return;
}

function textFadeOut(String, int) {
    let text = document.getElementById(String);
    text.style.color = "white";
    text.style.transition = "color "+int+"s";
    return;
}

function underline(String, bool) {
    let text = document.getElementById(String);
    if (bool) {
        text.style.textDecorationLine = "underline";
    } else {
        text.style.textDecorationLine = "none";
    }
    return;
}

function boopCrous() {
    currentlyOppened = 1;
    manageOpened();
    let element = document.getElementById("dropdown-crous");
    let toShow = document.getElementById("crous-wrapper");
    if (toShow.style.display != "none") {
        toShow.style.display = "none";
        toShow.style.transition = "all 0.5s";
    } else {
        toShow.style.display = "grid";
        var position = toShow.getBoundingClientRect();
        var absoluteElementTop = position.top + window.scrollY;
        var middle = absoluteElementTop - (window.innerHeight / 2);
        window.scrollTo(0, middle);
    }
    element.style.scale = "1.5";
    element.style.transition = "scale 0.2s";
    sleep(200).then(() => {
        element.style.scale = "1";
        element.style.transition = "scale 0.2s";
    });
    return;
}

function boopCorrespondance() {
    currentlyOppened = 2;
    manageOpened();
    let element = document.getElementById("dropdown-correspondance");
    let toShow = document.getElementById("correspondance-wrapper");
    if (toShow.style.display != "none") {
        toShow.style.display = "none";
        toShow.style.transition = "all 0.5s";
    } else {
        toShow.style.display = "grid";
        var position = toShow.getBoundingClientRect();
        var absoluteElementTop = position.top + window.scrollY;
        var middle = absoluteElementTop - (window.innerHeight / 2);
        window.scrollTo(0, middle);
    }
    element.style.scale = "1.5";
    element.style.transition = "scale 0.2s";
    sleep(200).then(() => {
        element.style.scale = "1";
        element.style.transition = "scale 0.2s";
    });
    return;
}

function boopJO() {
    currentlyOppened = 3;
    manageOpened();
    let element = document.getElementById("dropdown-jo");
    let toShow = document.getElementById("jo-wrapper");
    if (toShow.style.display != "none") {
        toShow.style.display = "none";
        toShow.style.transition = "all 0.5s";
    } else {
        toShow.style.display = "grid";
        var position = toShow.getBoundingClientRect();
        var absoluteElementTop = position.top + window.scrollY;
        var middle = absoluteElementTop - (window.innerHeight / 2);
        window.scrollTo(0, middle);
    }
    element.style.scale = "1.5";
    element.style.transition = "scale 0.2s";
    sleep(200).then(() => {
        element.style.scale = "1";
        element.style.transition = "scale 0.2s";
    });
    return;
}

function manageOpened() {
    let crous = document.getElementById("crous-wrapper");
    let correspondance = document.getElementById("correspondance-wrapper");
    let jo = document.getElementById("jo-wrapper");
    if (currentlyOppened == 1) {
        correspondance.style.display = "none";
        correspondance.style.transition = "all 0.5s";
        jo.style.display = "none";
        jo.style.transition = "all 0.5s";
    } else if (currentlyOppened == 2) {
        crous.style.display = "none";
        crous.style.transition = "all 0.5s";
        jo.style.display = "none";
        jo.style.transition = "all 0.5s";
    } else if (currentlyOppened == 3) {
        crous.style.display = "none";
        crous.style.transition = "all 0.5s";
        correspondance.style.display = "none";
        correspondance.style.transition = "all 0.5s";
    }
    return;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}