document.addEventListener("DOMContentLoaded", () => {
    // Function to validate and get the user's name
    function getValidName() {
        let name;
        do {
            name = prompt("Please enter your name:");
        } while (!name || !isNaN(name.trim()));
        return name.trim();
    }

    // Function to validate and get the user's birth year
    function getValidBirthYear() {
        let birthYear;
        do {
            birthYear = parseInt(prompt("Please enter your birth year (less than 2010):"), 10);
        } while (isNaN(birthYear) || birthYear >= 2010);
        return birthYear;
    }

    // Main function to gather user input and display it
    function getUserInfo() {
        const name = getValidName();
        const birthYear = getValidBirthYear();
        const currentYear = new Date().getFullYear();
        const age = currentYear - birthYear;

        // Display the user information on the page
        const userInfoDiv = document.getElementById("user-info");
        userInfoDiv.innerHTML = `
            <p>Name: ${name}</p>
            <p>Birth year: ${birthYear}</p>
            <p>Age: ${age}</p>
        `;
    }

    // Call the main function
    getUserInfo();
});
