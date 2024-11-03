// Function to validate the student form
function validateForm(event) {
    event.preventDefault(); // Prevent form from submitting
  
    // Retrieve form values
    let name = document.getElementById("name").value.trim();
    let address = document.getElementById("address").value.trim();
    let city = document.getElementById("city").value.trim();
    let state = document.getElementById("state").value.trim();
    let gender = document.querySelector('input[name="gender"]:checked');
    let mobile = document.getElementById("mobile").value.trim();
    let email = document.getElementById("email").value.trim();
    let pincode = document.getElementById("pincode").value.trim(); // New pincode field
  
    // Validation checks
    let errorMessages = [];
  
    // Name Validation: Must not be empty and should be alphabetic
    if (!name || !/^[a-zA-Z\s]+$/.test(name)) {
      errorMessages.push(
        "Please enter a valid name (alphabetic characters only)."
      );
    }
  
    // Address Validation: Must not be empty
    if (!address) {
      errorMessages.push("Please enter your address.");
    }
  
    // City Validation: Must not be empty and alphabetic
    if (!city || !/^[a-zA-Z\s]+$/.test(city)) {
      errorMessages.push(
        "Please enter a valid city (alphabetic characters only)."
      );
    }
  
    // State Validation: Must not be empty and alphabetic
    if (!state || !/^[a-zA-Z\s]+$/.test(state)) {
      errorMessages.push(
        "Please enter a valid state (alphabetic characters only)."
      );
    }
  
    // Pincode Validation: Must be a 6-digit number
    if (!/^\d{6}$/.test(pincode)) {
      errorMessages.push("Please enter a valid 6-digit pincode.");
    }
  
    // Gender Validation: Must select one
    if (!gender) {
      errorMessages.push("Please select your gender.");
    }
  
    // Mobile Number Validation: Must be a valid 10-digit number
    if (!/^\d{10}$/.test(mobile)) {
      errorMessages.push("Please enter a valid 10-digit mobile number.");
    }
  
    // Email Validation: Must follow email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errorMessages.push("Please enter a valid email address.");
    }
  
    // Display error or success message
    if (errorMessages.length > 0) {
      document.getElementById("result").innerHTML = errorMessages.join("<br>");
    } else {
      // Redirect to welcome page after form submission
      window.location.href = `home.html?name=${encodeURIComponent(name)}`;
    }
  }
  