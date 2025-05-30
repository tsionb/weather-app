function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityName = searchInputElement.value;
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = cityName;

  function showTemperature(response) {
    let city = response.data.city;
    let currentTemperature = Math.round(response.data.temperature.current);
    let temperatureValue = document.querySelector(".current-temperature-value");
    temperatureValue.innerHTML = `${currentTemperature}`;
  }
  let apiKey = "bab1af2004854993505442obtfd11355";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
