 // for rendering skills data using JS  
 const uiuxSkills = [
    { name: "Figma", level: "Advanced" },
    { name: "Creatie", level: "Advanced" },
    { name: "PhotoShop", level: "Intermediate" },
    { name: "Premiere Pro", level: "Advanced" },
    { name: "Adobe XD", level: "Basic" }
];

const webSkills = [
    { name: "HTML", level: "Intermediate" },
    { name: "CSS", level: "Intermediate" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "PHP", level: "Basic" },
    { name: "SQL", level: "Basic" },
    { name: "MYSQLI", level: "Basic" },
    { name: "React  ", level: "Intermediate" }
];

// Function to render skills
function renderSkills(skills, gridId) {
    const skillsGrid = document.getElementById(gridId);

    skills.forEach((skill, index) => {
        const skillDiv = document.createElement('div');
        skillDiv.className = 'skill';

        // Add icon
        const icon = document.createElement('i');
        icon.className = 'fa-solid fa-check-circle';
        skillDiv.appendChild(icon);

        // Add text container
        const textContainer = document.createElement('div');

        // Add skill name
        const skillName = document.createElement('p');
        skillName.textContent = skill.name;
        textContainer.appendChild(skillName);


        // Add skill level
        const skillLevel = document.createElement('span');
        skillLevel.textContent = skill.level;
        textContainer.appendChild(skillLevel);

        skillDiv.appendChild(textContainer);

        // If it's the last item, make it span both columns and center it
        if (index === skills.length - 1) {
            skillDiv.style.gridColumn = 'span 2';
            skillDiv.style.justifySelf = 'center';
        }

        skillsGrid.appendChild(skillDiv);
    });
}

// Call the function to render skills for both sections
renderSkills(uiuxSkills, 'uiux-skills-grid');
renderSkills(webSkills, 'web-skills-grid');



//For navigation
const navLinks = document.querySelectorAll('.nav-link');

// Function to remove active class from all links
function removeActiveClasses() {
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
}

// Function to add active class to the clicked link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        removeActiveClasses();
        link.classList.add('active');
    });
});

// Set "Home" as the default active link on page load
document.querySelector('.nav-link[href="#home"]').classList.add('active');

// Optional: Add a scroll event listener to update the active link as you scroll
window.addEventListener('scroll', () => {
    let fromTop = window.scrollY;

    navLinks.forEach(link => {
        let section = document.querySelector(link.hash);

        if (
            section.offsetTop <= fromTop + 60 &&
            section.offsetTop + section.offsetHeight > fromTop + 60
        ) {
            removeActiveClasses();
            link.classList.add('active');
        }
    });
});
