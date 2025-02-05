// Function to display the current date and time
function showDateTime() {
    const now = new Date();
    const localDateTime = now.toLocaleString(); // Local format of date and time
    const displayElement = document.getElementById("dateTimeDisplay");
    displayElement.textContent = `Current Date & Time: ${localDateTime}`;
}
