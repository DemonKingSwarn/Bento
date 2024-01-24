async function getWeather(location) {
    try {
      const response = await fetch(`https://wttr.in/${location}?format=%t`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch weather information');
      }

      const weatherData = await response.text();
      const weatherContainer = document.getElementById('weather-container');
      weatherContainer.textContent = `Weather in ${location}: ${weatherData}`;
    } catch (error) {
      console.error(error.message);
    }
  }

  // Automatically fetch weather when the page loads
  document.addEventListener('DOMContentLoaded', function() {
    getWeather('Ranchi'); // Change this to your desired default location
  });
