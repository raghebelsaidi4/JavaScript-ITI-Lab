// Function to validate the email
function validateEmail() {
    const email = document.getElementById("emailInput").value;
    const resultMessage = document.getElementById("resultMessage");

    if (email.includes("@")) {
        const atIndex = email.indexOf("@");
        if (atIndex > 0 && atIndex < email.length - 1) {
            resultMessage.textContent = "Valid email!";
            resultMessage.style.color = "green";
        } else {
            resultMessage.textContent = "Invalid email! '@' cannot be at the start or end.";
            resultMessage.style.color = "red";
        }
    } else {
        resultMessage.textContent = "Invalid email! Missing '@'.";
        resultMessage.style.color = "red";
    }
}
