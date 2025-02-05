function checkFacultyEligibility(faculty) {
    switch (faculty) {
        case "FCI":
            console.log("You’re eligible to Programming tracks");
            break;
        case "Engineering":
            console.log("You’re eligible to Network and Embedded tracks");
            break;
        case "Commerce":
            console.log("You’re eligible to ERP and Social media tracks");
            break;
        default:
            console.log("You’re eligible to SW fundamentals track");
            break;
    }
}

// test
checkFacultyEligibility("FCI"); 
checkFacultyEligibility("Engineering");
checkFacultyEligibility("Commerce"); 
checkFacultyEligibility("Law"); 

/**
 * switch Better in this case because:
 * 1- Simplifies Multiple Value Comparisons
 * 2- Better Readability
 */
