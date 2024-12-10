function validateForm() {
    var firstname = document.forms["myForm"]["firstname"].value;
    var lastname = document.forms["myForm"]["lastname"].value;
    var emailid = document.forms["myForm"]["emailid"].value;
    var phno = document.forms["myForm"]["phno"].value;
    var text1 = document.forms["myForm"]["text1"].value;

    // Regular expressions for validation
    var nameRegex = /^[a-zA-Z]+$/;  // Only alphabets
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;  // Email format
    var phoneRegex = /^[0-9]{10}$/;  // 10 digit phone number
    var textRegex = /.+/;  // Non-empty message

    // Validate First Name
    if (firstname == "" || !nameRegex.test(firstname)) {
        alert("Please enter a valid First name (only alphabets allowed).");
        return false;
    }

    // Validate Last Name
    if (lastname == "" || !nameRegex.test(lastname)) {
        alert("Please enter a valid Last name (only alphabets allowed).");
        return false;
    }

    // Validate Email Address
    if (emailid == "" || !emailRegex.test(emailid)) {
        alert("Please enter a valid Email ID.");
        return false;
    }

    // Validate Phone Number
    if (phno == "" || !phoneRegex.test(phno)) {
        alert("Please enter a valid Phone Number (10 digits).");
        return false;
    }

    // Validate Message
    if (text1 == "" || !textRegex.test(text1)) {
        alert("Please enter a message.");
        return false;
    }

    // If all validations pass
    alert("Form submitted successfully!");
    return true;
}