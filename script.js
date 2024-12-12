const API_KEY_OPENWEATHERMAP = CONFIG.API_KEY_OPENWEATHERMAP;
const API_KEY_WEATHERAPI = CONFIG.API_KEY_WEATHERAPI;
const API_KEY_ACCUWEATHER = CONFIG.API_KEY_ACCUWEATHER;

// Fungsi untuk menampilkan spinner saat data sedang dimuat
function showLoading(elementId) {
  document.getElementById(elementId).innerHTML = `
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>`;
}

// Fungsi untuk mengambil data dari OpenWeatherMap
async function getWeatherOpenWeatherMap(city) {
  showLoading("weather-openweathermap");
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY_OPENWEATHERMAP}&units=metric`
    );
    if (!response.ok) throw new Error("Kota tidak ditemukan!");
    const data = await response.json();
    document.getElementById("weather-openweathermap").innerHTML = `
      <p>Cuaca: ${data.weather[0].description}</p>
      <p>Suhu: ${data.main.temp} °C</p>
      <p>Kelembapan: ${data.main.humidity} %</p>
    `;
  } catch (error) {
    document.getElementById(
      "weather-openweathermap"
    ).innerHTML = `<p>Error: ${error.message}</p>`;
  }
}

// Fungsi untuk mengambil data dari WeatherAPI
async function getWeatherWeatherAPI(city) {
  showLoading("weather-weatherapi");
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY_WEATHERAPI}&q=${city}`
    );
    if (!response.ok) throw new Error("Kota tidak ditemukan!");
    const data = await response.json();
    document.getElementById("weather-weatherapi").innerHTML = `
      <p>Cuaca: ${data.current.condition.text}</p>
      <p>Suhu: ${data.current.temp_c} °C</p>
      <p>Kelembapan: ${data.current.humidity} %</p>
    `;
  } catch (error) {
    document.getElementById(
      "weather-weatherapi"
    ).innerHTML = `<p>Error: ${error.message}</p>`;
  }
}

// Fungsi untuk mengambil data dari AccuWeather
async function getWeatherAccuWeather(city) {
  showLoading("weather-accuweather");
  try {
    const locationResponse = await fetch(
      `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY_ACCUWEATHER}&q=${city}`
    );
    const locationData = await locationResponse.json();
    if (locationData.length === 0) throw new Error("Kota tidak ditemukan!");
    const locationKey = locationData[0].Key;

    const weatherResponse = await fetch(
      `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${API_KEY_ACCUWEATHER}`
    );
    const weatherData = await weatherResponse.json();
    const weather = weatherData[0];

    document.getElementById("weather-accuweather").innerHTML = `
      <p>Cuaca: ${weather.WeatherText}</p>
      <p>Suhu: ${weather.Temperature.Metric.Value} °C</p>
      <p>Kelembapan: ${weather.RealFeelTemperature}</p>
    `;
  } catch (error) {
    document.getElementById(
      "weather-accuweather"
    ).innerHTML = `<p>Error: ${error.message}</p>`;
  }
}

// Fungsi untuk memuat ulang semua data cuaca
function refreshWeatherData() {
  const city = document.getElementById("city-input").value || "Bandung"; // Ambil kota dari input
  getWeatherOpenWeatherMap(city);
  getWeatherWeatherAPI(city);
  getWeatherAccuWeather(city);
}

// Panggil fungsi refresh ketika tombol refresh ditekan
document.getElementById("refresh-btn").addEventListener("click", () => {
  refreshWeatherData(); // Tidak perlu mengirimkan parameter kota, karena sudah diambil dari input
});

// Event listener untuk tombol search
document.getElementById("search-btn").addEventListener("click", () => {
  refreshWeatherData(); // Tidak perlu mengirimkan parameter kota, karena sudah diambil dari input
});

// Panggil fungsi refresh ketika halaman pertama kali dimuat (gunakan default atau input yang ada)
document.addEventListener("DOMContentLoaded", () => {
  refreshWeatherData(); // Memastikan data cuaca dimuat saat halaman pertama kali dimuat
});
