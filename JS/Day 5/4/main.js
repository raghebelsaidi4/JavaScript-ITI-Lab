function validateInputs() {
    // Regular expression for Full Name validation
    const fullNameRegex = /^[A-Za-z]{3,}( [A-Za-z]{3,})+$/;

    // Regular expression for Email validation
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com|net|edu|org)\.eg$/;

    let fullName;
    let email;

    // Prompt the user to enter a valid full name
    while (true) {
        fullName = prompt(
            "Enter your full name (at least 3 characters for each name part, separated by spaces):"
        );
        if (fullNameRegex.test(fullName)) {
            alert("Valid full name!");
            break;
        } else {
            alert(
                "Invalid full name! Make sure your name contains only alphabetic characters, at least 3 letters for each part, and no special characters or leading/trailing spaces."
            );
        }
    }

    // Prompt the user to enter a valid email
    while (true) {
        email = prompt(
            "Enter your email address (must end with .eg domain, e.g., name@domain.com.eg):"
        );
        if (emailRegex.test(email)) {
            alert("Valid email address!");
            break;
        } else {
            alert(
                "Invalid email address! Make sure it ends with a valid Egyptian domain (.com.eg, .net.eg, .edu.eg, or .org.eg)."
            );
        }
    }

    // Display the valid inputs on the page
    document.body.innerHTML = `
        <h2>Validated User Information</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
    `;
}

// Run the function
validateInputs();
