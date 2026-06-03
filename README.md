# Weather App 🌤️

A responsive and dynamic weather forecasting application built as part of [The Odin Project](https://theodinproject.com) curriculum. This project demonstrates asynchronous JavaScript, API integration, and modern front-end bundling workflows using Webpack.

🔗 **[Live Demo](https://ofosunewton.github.io/Wheather-App/)**

## 🚀 Features

- **Real-Time Data**: Fetches current weather conditions and forecasts using the OpenWeather API.
- **Dynamic Search**: Search for weather information by city name or country.
- **Toggleable Units**: Seamlessly switch between Celsius and Fahrenheit.
- **Dynamic UI**: Backgrounds or icons change dynamically based on the current weather condition (e.g., sunny, rainy, snowy).
- **Asynchronous Workflow**: Utilizes modern JavaScript `async/await` and `fetch` to handle data loading gracefully.

## 🛠️ Built With

- **HTML5 & CSS3** (Custom properties & Flexbox/Grid)
- **JavaScript (ES6+)** (Modules, Async/Await)
- **Webpack 5** (Asset management, minification, and development server)
- **OpenWeather API** (Weather data service)

## 📦 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org) installed on your computer.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com
   ```
2. Navigate into the project directory:
   ```bash
   cd Wheather-App
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Development

To start the local development server with hot-reloading:
```bash
npm start
```
Open [http://localhost:8080](http://localhost:8080) in your browser to view the application.

### Production Build

To bundle your code into optimized, production-ready static assets (creates the `dist/` folder):
```bash
npm run build
```

## 🌐 Deployment

This project is configured for automated deployment to GitHub Pages. To deploy the latest version of your `dist/` bundle, run:
```bash
npm run deploy
```

## 📝 Acknowledgments

- **The Odin Project** for the fantastic curriculum and project guidelines.
- **OpenWeather** for providing the free weather data API.
