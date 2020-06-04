//Important
document.querySelector(".project-full").style.display = "none"
document.querySelector(".close").style.display = "none"
let db;
let projects;
let educations;
let experiences;
let achievements;

initialize = async () => {
    db = await (await fetch('/assets/data/db.json')).json();
    projects = db.projects;
    educations = db.educations;
    experiences = db.experiences;
    achievements = db.achievements;
    setProjects();
    setAllProjects();
    setEducations();
    setExperiences();
    setAchievements();
}

displayProjects = () => {
    document.querySelector(".content").style.display = "none"
    document.querySelector(".sidebar ul").style.display = "none"
    document.querySelector(".project-full").style.display = "block"
    document.querySelector(".close").style.display = "flex"
    window.scrollTo(0, 0)
}

closeProjects = () => {
    document.querySelector(".project-full").style.display = "none"
    document.querySelector(".close").style.display = "none"
    var x = window.matchMedia("(min-width: 1024px)");
    if (x.matches) {
        document.querySelector(".sidebar ul").style.display = "block"
    }
    document.querySelector(".content").style.display = "block"
    window.scrollTo(0, 0)
}

setProjects = async () => {

    let fewProjects = "";
    projects.slice(0, 2).forEach(project => {
        let html = `
            <div class="project-item">
                <img src="${project.image}" alt="">
                <div class="project-item-content">
                    <h4>${project.title}</h4>
                    <h5>${project.subTitle}</h5>
                    <p>${project.description}</p>
                    <div class="project-item-footer">
                        <span>
        `;
        project.technologies.forEach(technology => {
            let tech = `
                <img src="assets/icons/icons8-${technology}-50.png" alt="${technology}">
            `;
            html += tech;
        })
        html += `
                    </span>
                    <a class="btn" href="#ID${project.id}" onclick="displayProjects();">View Project</a>
                </div>

            </div>
            </div>
        `
        fewProjects += html;
    })
    document.querySelector("#projectContent").innerHTML = fewProjects;

}

setAllProjects = async () => {

    let allProjects = "";
    projects.forEach(project => {
        let html = `
            <div class="space" id="ID${project.id}"><hr></div>
            <div class="project-item">
            <div class="project-item-header">
                <h4>${project.title}</h4>
                <h5>${project.subTitle}</h5>
                <img src="${project.image}" alt="">
                <p>${project.description}</p>
            </div>
            <div class="project-item-footer">
                <div class="project-item-footer-right">
                    <span>
                        <p>Technologies Used</p>
        `
        project.technologies.forEach(technology => {
            let tech = `
                <img src="assets/icons/icons8-${technology}-50.png" alt="${technology}">
            `;
            html += tech;
        })
        html += `
                    </span>
                    <span>
                        <p>Project ID: <b>ID${project.id}</b></p>
                    </span>
                    <span>
                        <p>Date: <b>${project.date}</b></p>
                    </span>
                    <a class="btn" href="${project.link}"><i class="fab fa-github"></i>&nbsp;Project Link</a>
                </div>
            </div>
        </div>
        `
        allProjects += html;
    })
    document.querySelector("#allProjectContent").innerHTML = allProjects;
}

setEducations = async () => {

    let educationContent = "";
    educations.forEach(education => {
        let html = `
            <div class="education-item">
                <div class="details">
                    <h4>${education.university}</h4>
                    <h5>${education.degree}</h5>
                    <p>${education.institute}</p>
                    <p>${education.grade ? education.grade : ""}</p>
                </div>
                <div class="timeline">
                    ${education.timeline}
                </div>
            </div>
        `;
        educationContent += html;
    });
    document.querySelector("#educationContent").innerHTML = educationContent;

}

setExperiences = async () => {

    let experienceContent = "";
    experiences.forEach(experience => {
        let html = `
            <div class="experience-item">
                <div class="details">
                    <h4>${experience.role}</h4>
                    <h5>${experience.company}</h5>
                    <p>${experience.description}</p>
                </div>
                <div class="timeline">
                    ${experience.timeline}
                </div>
            </div>
        `
        experienceContent += html;
    })
    document.querySelector("#experienceContent").innerHTML = experienceContent;

}

setAchievements = async () => {

    let achievementContent = "";
    achievements.forEach(achievement => {
        let html = `
            <div class="achievement-item">
                <div class="details">
                    <h4>${achievement.name}</h4>
                    <p>${achievement.description}</p>
                </div>
                <div class="timeline">
                    <p>${achievement.timeline}</p>
                    <a class="btn" href="${achievement.link}">View</a>
                </div>
            </div>
        `
        achievementContent += html;
    })
    document.querySelector('#achievementContent').innerHTML = achievementContent;

}

