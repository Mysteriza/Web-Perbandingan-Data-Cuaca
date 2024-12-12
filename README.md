# Weather Comparison Application

A simple weather comparison application that allows users to compare the current weather data from multiple weather APIs, including OpenWeatherMap, WeatherAPI, and AccuWeather.

## Features

- Compare weather data from three different weather services:
  - OpenWeatherMap
  - WeatherAPI
  - AccuWeather
- Display current weather conditions such as temperature, humidity, and description.
- Responsive design using Bootstrap, ensuring a smooth experience on both desktop and mobile.
- Easily customizable to add more weather APIs in the future.

## Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/Mysteriza/Web-Perbandingan-Data-Cuaca
2. Open the project folder and make sure the necessary files are available:
   - index.html - The main HTML file for the application.
   - script.js - Contains the JavaScript logic for fetching weather data.
   - config.js - Stores the API keys (please create the file and replace the API keys with your own) with this format:
     ```bash
     const CONFIG = {
     API_KEY_OPENWEATHERMAP: "api_key",
     API_KEY_WEATHERAPI: "api_key",
     API_KEY_ACCUWEATHER: "api_key",
     };
   - Open index.html in your browser to run the app locally.

## Usage
1. Type the name of the city in the search input and click "Search" to get the weather for that city.
2. Click "Refresh Data" to reload the weather data for the currently selected city.
3. The application will display the current weather conditions, including temperature, humidity, and description, from all three weather providers.

## Contributing
Feel free to fork the repository, make improvements, and submit pull requests. Contributions are always welcome!

## Screenshot
![image](https://github.com/user-attachments/assets/f88556f6-020c-48d8-9886-a774cc1dd6f5)

