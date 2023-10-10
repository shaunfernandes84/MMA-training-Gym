function validateForm() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;

    // Regular expressions for validation
    var namePattern = /^[a-zA-Z ]+$/;
    var phonePattern = /^\d{10}$/;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!namePattern.test(name)) {
        alert("Name should contain only letters and spaces.");
        return false;
    }

    if (!phonePattern.test(phone)) {
        alert("Phone number should be 10 digits numeric.");
        return false;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // If all validations pass, the form will be submitted
    return true;
}