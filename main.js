function averageGrade() {
    // Get grades from input fields
    let mathGrade = parseInt(document.getElementById('mathGrade').value);
    let socialGrade = parseInt(document.getElementById('socialGrade').value);
    let scienceGrade = parseInt(document.getElementById('scienceGrade').value);

    // Check for valid numeric inputs
    if (isNaN(mathGrade) || isNaN(socialGrade) || isNaN(scienceGrade)) {
        alert("Please enter valid numeric grades for all subjects.");
        return;
    }

    // Calculate average and round to the nearest integer
    let average = Math.round((mathGrade + socialGrade + scienceGrade) / 3);

    // Determine the rating based on the average
    let rating;
    if (average >= 94) {
        rating = "Excellent";
    } else if (average >= 87) {
        rating = "Above Satisfactory";
    } else if (average >= 80) {
        rating = "Satisfactory";
    } else if (average >= 75) {
        rating = "Needs Improvement";
    } else if (average >= 70) {
        rating = "Poor";
    } else {
        rating = "Failing";
    }

    // Display the result in an alert
    alert(`Your average grade is ${average}. - ${rating}`);
}
