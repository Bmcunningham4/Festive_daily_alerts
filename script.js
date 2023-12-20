document.addEventListener('DOMContentLoaded', function() {
    // Function to fetch date and holiday information
    function fetchData() {
      // Simulating fetching data from Python (replace this with actual Python interaction)
      // For simplicity, I'll use a dummy dataset
      const dummyData = {
        date: '01/01/2024', // Replace this with the actual date
        dayOfWeek: 'Monday', // Replace this with the actual day of the week
        holiday: 'New Year\'s Day' // Replace this with the actual holiday
      };
  
      // Update the HTML content with fetched data
      document.getElementById('dateText').innerText = `Today's data is ${dummyData.date} happy ${dummyData.dayOfWeek}!!`;
      document.getElementById('holidayText').innerText = `Today is international/national ${dummyData.holiday} day.`;
    }
  
    // Fetch data when the page loads
    fetchData();
  
    // Refresh data every 24 hours (86400000 milliseconds)
    setInterval(fetchData, 86400000);
  });
  