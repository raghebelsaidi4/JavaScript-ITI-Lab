const skills = [
    "Java",
    "JS",
    "PHP",
    "Ruby",
    "Python",
    "Spring Boot",
    "Go",
    "C",
    "C++",
    "Erlang"
];

// Function to render the skills list
function renderSkills() {
    const skillsList = document.getElementById("skillsList");
    skillsList.innerHTML = ""; // Clear current skills

    skills.forEach((skill, index) => {
        const skillItem = document.createElement("div");
        skillItem.classList.add("skill-item");

        const skillName = document.createElement("span");
        skillName.textContent = skill;

        const removeButton = document.createElement("button");
        removeButton.classList.add("remove-btn");
        removeButton.textContent = "X";
        removeButton.onclick = () => removeSkill(index);

        skillItem.appendChild(skillName);
        skillItem.appendChild(removeButton);

        skillsList.appendChild(skillItem);
    });
}

function removeSkill(index) {
    skills.splice(index, 1); // Remove skill from the array
    renderSkills(); // Re-render the skills list
}

// Initial render
renderSkills();
