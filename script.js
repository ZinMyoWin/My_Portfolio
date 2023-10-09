document.addEventListener("DOMContentLoaded", function () {
    // Mock AJAX call
    setTimeout(() => {
        fetchData().then(data => {
            renderSkills(data);
        });
    }, 1000);
});

function fetchData() {
    return new Promise(resolve => {
        const skillsData = [
            { skill: 'HTML', proficiency: 75},
            { skill: 'CSS', proficiency: 80},
            { skill: 'Tailwind CSS', proficiency: 80},
            { skill: 'Bootstrap', proficiency: 85},
            { skill: 'JavaScript', proficiency: 90},
            { skill: 'Java', proficiency: 85},
            { skill: 'Spring', proficiency: 80 },
            { skill: 'Spring Boot', proficiency: 80},
            { skill: 'jQuery', proficiency: 85},
            { skill: 'API Integration', proficiency: 90},
            { skill: 'React Js', proficiency: 85},
            { skill: 'MUI', proficiency: 80}
        ];
        resolve(skillsData);
    });
}

function renderSkills(data) {
    const container = document.querySelector(".skills-container");
    container.innerHTML = ''; // Clear the initial content

    data.forEach(item => {
        const skillDiv = document.createElement('div');
        skillDiv.classList.add('skill');

        const label = document.createElement('label');
        label.textContent = `${item.skill}:`;

        const skillBar = document.createElement('div');
        skillBar.classList.add('skill-bar');
        skillBar.setAttribute('data-percent', item.proficiency);
        skillBar.style.position = 'relative';

        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.textContent = item.details;
        skillBar.appendChild(tooltip);

        skillBar.addEventListener('mouseenter', function() {
            tooltip.style.display = 'block';
        });

        skillBar.addEventListener('mouseleave', function() {
            tooltip.style.display = 'none';
        });

        skillDiv.appendChild(label);
        skillDiv.appendChild(skillBar);
        container.appendChild(skillDiv);
    });

    animateBars();
}

function animateBars() {
    const skillBars = document.querySelectorAll(".skill-bar");

    skillBars.forEach(bar => {
        let percent = bar.getAttribute("data-percent");
        const barInner = document.createElement('div');
        barInner.style.height = '100%';
        barInner.style.width = '0';
        barInner.style.background = 'royalblue';
        barInner.style.borderRadius = '15px';
        barInner.style.animation = `loadSkill 1.5s forwards`;
        barInner.style.animationDelay = '0.5s';
        bar.appendChild(barInner);

        setTimeout(() => {
            barInner.style.width = `${percent}%`;
        }, 100);
    });
}
