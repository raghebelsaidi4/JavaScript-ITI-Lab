document.getElementById('getUserInfoBtn').addEventListener('click', () => {
    let name;
    let birthYear;
    let age;

    while (true) {
        name = prompt("Enter your name:");
        if (name && isNaN(name)) {
            break; // Valid name
        } else {
            alert("Please enter a valid name (letters only).");
        }
    }

    // Prompt for birth year and validate
    while (true) {
        birthYear = prompt("Enter your birth year (must be a number less than 2010):");
        if (birthYear && !isNaN(birthYear) && birthYear < 2010) {
            break; // Valid birth year
        } else {
            alert("Please enter a valid birth year (number less than 2010).");
        }
    }

    // Calculate age
    const currentYear = new Date().getFullYear();
    age = currentYear - birthYear;

    // Display user information on the page
    const userInfoDiv = document.getElementById('userInfo');
    userInfoDiv.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Birth year:</strong> ${birthYear}</p>
        <p><strong>Age:</strong> ${age}</p>
    `;
});
