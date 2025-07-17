const apiKey = "f23a4c5b85dc931c81f55c66458857b9";

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const error = document.getElementById("error");
  const weatherInfo = document.getElementById("weatherInfo");

  if (!city) {
    error.textContent = "Please enter a city name.";
    weatherInfo.classList.add("hidden");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      document.getElementById("cityName").textContent = data.name;
      document.getElementById("temp").textContent = data.main.temp;
      document.getElementById("condition").textContent = data.weather[0].main;
      document.getElementById("humidity").textContent = data.main.humidity;
      document.getElementById("wind").textContent = data.wind.speed;
      document.getElementById("icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

      weatherInfo.classList.remove("hidden");
      error.textContent = "";
    })
    .catch(() => {
      weatherInfo.classList.add("hidden");
      error.textContent = "City not found. Please try again with a valid name.";
    });
}
