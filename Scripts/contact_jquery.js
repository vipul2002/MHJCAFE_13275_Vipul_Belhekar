
var fnameNode = $("#firstname");
var lnameNode = $("#lastname");
var emailNode = $("#emailid");
var phoneNode = $("#phno");
var textNode = $("#text1");
var formNode = $('#submit_form');
// formNode.on('submit', (event) => validateAll(event));

const errorNode1 = $("#error1");
const errorNode2 = $("#error2");
const errorNode3 = $("#error3");
const errorNode4 = $("#error4");
const errorNode5 = $("#error5");

fnameNode.keyup(() => validate1());
lnameNode.on('keyup', () => validate2());
emailNode.on('keyup', () => validate3());
phoneNode.on('keyup', () => validate4());
textNode.on('keyup', () => validate5());
formNode.on('submit', () => validateAll());

fnameNode.blur(() => blur1());
lnameNode.on('blur', () => blur2());
emailNode.on('blur', () => blur3());
phoneNode.on('blur', () => blur4());
textNode.on('blur', () => blur5());

// Regular expressions for validation
var nameRegex = /^[a-zA-Z]+$/;  // Only alphabets
var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;  // Email format
var phoneRegex = /^[0-9]{10}$/;  // 10 digit phone number
var textRegex = /.+/;  // Non-empty message

const invalidBorder = "2px solid red";
const validBorder = "2px solid green";

// Original border style
const ogBorder = "2px solid #08080810";

// Validation functions
function validate1() {
    // Clear any previous errors
    fnameNode.css("border", invalidBorder); // Set invalid border
    let fname = fnameNode.val();
    if (fname == "") {
        return false;
    } else if (!nameRegex.test(fname)) {
        return false;
    } else {
        fnameNode.css("border", validBorder); // Set valid border
        return true;
    }
}

function validate2() {
    lnameNode.css("border", invalidBorder); // Set invalid border
    let lname = lnameNode.val();
    if (lname == "") {
        return false;
    } else if (!nameRegex.test(lname)) {
        return false;
    } else {
        lnameNode.css("border", validBorder); // Set valid border
        return true;
    }
}

function validate3() {
    emailNode.css("border", invalidBorder); // Set invalid border
    let email = emailNode.val();
    if (email == "") {
        return false;
    } else if (!emailRegex.test(email)) {
        return false;
    } else {
        emailNode.css("border", validBorder); // Set valid border
        return true;
    }
}

function validate4() {
    phoneNode.css("border", invalidBorder); 
    let phone = phoneNode.val();
    if (phone == "") {
        return false;
    } else if (!phoneRegex.test(phone)) {
        return false;
    } else {
        phoneNode.css("border", validBorder); 
        return true;
    }
}

function validate5() {
    textNode.css("border", invalidBorder); 
    let message = textNode.val();
    if (message == "") {
        return false;
    } else if (!textRegex.test(message)) {
        return false;
    } else {
        textNode.css("border", validBorder); 
        return true;
    }
}

// Validate all fields on form submit
function validateAll() {
    const state1 = validate1();
    const state2 = validate2();
    const state3 = validate3();
    const state4 = validate4();
    const state5 = validate5();
    
    // return (state1 && state2 && state3 && state4 && state5);
    if (state1 && state2 && state3 && state4 && state5) {
      
        window.alert("Form Submitted Successfully");  
       
        
        
    }
    return (state1 && state2 && state3 && state4 && state5);
    
}

// Reset the border to its original state on blur if the input is valid
function blur1() {
    if (fnameNode.val() !== "" && nameRegex.test(fnameNode.val())) {
        fnameNode.css("border", ogBorder); // Reset to original border if valid
    }
}

function blur2() {
    if (lnameNode.val() !== "" && nameRegex.test(lnameNode.val())) {
        lnameNode.css("border", ogBorder); // Reset to original border if valid
    }
}

function blur3() {
    if (emailNode.val() !== "" && emailRegex.test(emailNode.val())) {
        emailNode.css("border", ogBorder); // Reset to original border if valid
    }
}

function blur4() {
    if (phoneNode.val() !== "" && phoneRegex.test(phoneNode.val())) {
        phoneNode.css("border", ogBorder); // Reset to original border if valid
    }
}

function blur5() {
    if (textNode.val() !== "" && textRegex.test(textNode.val())) {
        textNode.css("border", ogBorder); // Reset to original border if valid
    }
}
