const mouseoverSection = document.getElementById("mouseover-section");
mouseoverSection.addEventListener("mouseover", function () {
  document.body.style.backgroundColor = "#f39c12"; // Change body background color
  // document.querySelector(".container").style.backgroundColor = "#f8c471"; // Change container background color
});

mouseoverSection.addEventListener("mouseout", function () {
  document.body.style.backgroundColor = "#f3f4f6"; // Reset body background color
  // document.querySelector(".container").style.backgroundColor = "#fff"; // Reset container background color
});

const focusInput = document.getElementById("focus-input");
focusInput.addEventListener("focus", function () {
  document.body.style.backgroundColor = "#f39c12";
  focusInput.style.backgroundColor = "#4CC9FE"; // Change input box background
});

focusInput.addEventListener("blur", function () {
  document.body.style.backgroundColor = "#f3f4f6";
  focusInput.style.backgroundColor = "#f3f4f6"; // Reset to the original background
});
