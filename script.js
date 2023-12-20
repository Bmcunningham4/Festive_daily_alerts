function showHolidayAlert() {
  const currentDate = new Date();
  
  // Define holidays with their respective dates
  const holidays = {
    '01-01': 'Happy New Year!',
    '02-14': 'Happy Valentine\'s Day!',
    '07-04': 'Happy Independence Day!',
    // Add more holidays as needed with the format 'MM-DD': 'Holiday Greeting'
    '12-21': 'Happy Winter Solstice!',
    '12-22': 'Happy Hanukkah!',
    '12-23': 'Happy Festivus!',
  };

  // Check if the current date corresponds to a holiday
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const currentFormattedDate = `${month}-${day}`;

  if (holidays[currentFormattedDate]) {
    const holidayMessage = holidays[currentFormattedDate];
    alert(`Today is ${currentFormattedDate}.\n${holidayMessage}`);
  } else {
    alert('No holiday today.');
  }
}

// Function to update date and holiday on page load
function updateDateAndHoliday() {
  const dateElement = document.getElementById('dateDisplay');
  const dayElement = document.getElementById('dayDisplay');
  const holidayElement = document.getElementById('holidayDisplay');

  const currentDate = new Date();
  const dayOfWeek = currentDate.toLocaleDateString('en-US', { weekday: 'long' });

  dateElement.textContent = `Today's date: ${currentDate.toLocaleDateString()}`;
  dayElement.textContent = `Happy ${dayOfWeek}!`;
  
  // Define holidays with their respective dates
  const holidays = {
    '01-01': 'Happy New Year!',
    '02-14': 'Happy Valentine\'s Day!',
    '07-04': 'Happy Independence Day!',
    '12-20': "Ben's day get around him!",
    // Add more holidays as needed with the format 'MM-DD': 'Holiday Greeting'
    '12-21': 'Happy Winter Solstice!',
    '12-22': 'Happy Hanukkah!',
    '12-23': 'Happy Festivus!',
  };

  // Check if the current date corresponds to a holiday
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const currentFormattedDate = `${month}-${day}`;

  if (holidays[currentFormattedDate]) {
    holidayElement.textContent = holidays[currentFormattedDate];
  } else {
    holidayElement.textContent = 'No holiday today.';
  }

  // Check for holiday and show alert when the button is clicked
  const showHolidayBtn = document.getElementById('showHolidayBtn');
  showHolidayBtn.addEventListener('click', showHolidayAlert);
}

// Call the function initially
updateDateAndHoliday();

// Update the date and holiday every 24 hours
setInterval(updateDateAndHoliday, 24 * 60 * 60 * 1000);



//? Still not quite working but we're getting there son you an do it..