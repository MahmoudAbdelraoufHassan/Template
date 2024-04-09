const targetDate = new Date('2025-12-31').getTime();
  // Update the countdown every second
  const countdown = setInterval(() => {
    // Get the current date and time
    const currentDate = new Date().getTime();
    // Calculate the time remaining in milliseconds
    const timeRemaining = targetDate - currentDate;
    // Calculate days, hours, minutes, and seconds from milliseconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    // Update the HTML elements with the calculated values
    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
    // If the countdown is over, display a message
    if (timeRemaining < 0) {
      clearInterval(countdown);
      document.getElementById('event_title').innerHTML = 'The event has ended!';
      document.querySelector('.time').style.display = 'none'; // Hide the countdown
    }
  }, 1000);