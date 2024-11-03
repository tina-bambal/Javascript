function generateTableUsingForLoop() {
    // Get the number from the user input
    let number = parseInt(document.getElementById("numberInput").value);
  
    if (isNaN(number)) {
      document.getElementById("tableResult").innerHTML =
        "Please enter a valid number.";
      return;
    }
  
    // Initialize an empty string for the table
    let tableHTML = `<table><tr><th>Multiplication Table of ${number}</th></tr>`;
  
    // Generate the multiplication table
    for (let i = 1; i <= 10; i++) {
      tableHTML += `<tr><td>${number} x ${i} = ${number * i}</td></tr>`;
    }
  
    // Close the table tag
    tableHTML += "</table>";
  
    // Display the table in the div with id="tableResult"
    document.getElementById("tableResult").innerHTML = tableHTML;
  }
  
  function generateTableUsingWhileLoop() {
    // Get the number from user
    let number = parseFloat(document.getElementById("numberInput").value);
  
    if (isNaN(number)) {
      document.getElementById("tableResult").innerHTML =
        "Please enter a valid number.";
      return;
    }
  
    // Initialize an empty string for the table
    let tableHTML = `<table><tr><th>Multiplication Table of ${number}</th></tr>`;
  
    // Generate multiplication table using while loop
    let i = 1;
    while (i <= 10) {
      tableHTML += `<tr><td>${number} x ${i} = ${number * i}</td></tr>`;
      i++;
    }
  
    // Close the table tag after generating all rows
    tableHTML += "</table>";
  
    // Display the table in the div with id="tableResult"
    document.getElementById("tableResult").innerHTML = tableHTML;
  }
  
  function generateTableUsingDoWhileLoop() {
    // Get the number from user
    let number = parseFloat(document.getElementById("numberInput").value);
  
    if (isNaN(number)) {
      document.getElementById("tableResult").innerHTML =
        "Please enter a valid number.";
      return;
    }
  
    // Initialize an empty string for the table
    let tableHTML = `<table><tr><th>Multiplication Table of ${number}</th></tr>`;
  
    // Generate multiplication table using do-while loop
    let i = 1;
    do {
      tableHTML += `<tr><td>${number} x ${i} = ${number * i}</td></tr>`;
      i++;
    } while (i <= 10);
  
    // Close the table tag after generating all rows
    tableHTML += "</table>";
  
    // Display the table in the div with id="tableResult"
    document.getElementById("tableResult").innerHTML = tableHTML;
  }
  