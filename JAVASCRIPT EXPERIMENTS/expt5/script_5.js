let countdownInterval; // Declare the interval variable globally

function startCountdown() {
  const endDateInput = document.getElementById("endDate").value;
  const endDate = new Date(endDateInput);

  // Clear the previous countdown if it exists
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }

  if (isNaN(endDate.getTime())) {
    document.getElementById("countdown").innerHTML =
      "<p>Please enter a valid date.</p>";
    return;
  }

  countdownInterval = setInterval(function () {
    const now = new Date().getTime();
    const timeRemaining = endDate.getTime() - now;

    if (timeRemaining <= 0) {
      // If the countdown is expired, show message and clear interval
      clearInterval(countdownInterval);
      document.getElementById("countdown").innerHTML =
        "<p>Countdown expired.</p>";
    } else {
      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      // Display the result
      document.getElementById("countdown").innerHTML = `
        <p>${days}d ${hours}h ${minutes}m ${seconds}s</p>
      `;
    }
  }, 1000); // Update countdown every second
}
