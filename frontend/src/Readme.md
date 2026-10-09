
# Uttarakhand Landslide Prediction and Early Warning System — Frontend

## 📌 Overview

The frontend of the Uttarakhand Landslide Prediction and Early Warning System is a web-based user interface designed to present landslide-related information in a clear and accessible way.

The application aims to help users explore rainfall information, view geographical risk information, visualize relevant data, and interact with a landslide prediction interface for the Uttarakhand region.

The frontend is developed using React.js and Vite, with Tailwind CSS for styling and additional libraries for maps, charts, and navigation.

## 🎯 Objectives

- Develop a simple and user-friendly interface for landslide risk information.
- Display rainfall and other relevant environmental information.
- Provide an interactive map interface for geographical visualization.
- Present charts and visual summaries through a dashboard.
- Provide an interface for entering relevant parameters and viewing prediction results.
- Create a responsive design that can be extended as the project develops.

## ✨ Features

- **Dashboard:** Displays an overview of landslide-related information.
- **Risk Map:** Provides an interactive map interface for geographical visualization.
- **Data Visualization:** Uses charts to present rainfall and other relevant information.
- **Prediction Interface:** Provides a user interface for entering prediction-related inputs.
- **Navigation:** Enables users to navigate between different pages.
- **Responsive UI:** Designed to support different screen sizes.
- **Reusable Components:** Organizes the interface into maintainable React components.

> Note: Features that require a trained machine learning model, live weather data, or a backend API will provide actual results only after the relevant integration is completed.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React.js | Building the user interface |
| Vite | Development server and build tool |
| JavaScript | Application logic |
| Tailwind CSS | Styling and responsive layouts |
| React Router DOM | Page navigation |
| Lucide React | Icons |
| React Leaflet | Interactive maps |
| Leaflet | Map functionality |
| Recharts | Charts and data visualization |
| npm | Package management |

## 📂 Project Structure

```text
frontend/
├── public/
├── src/
│   ├── components/
│   │   └── Reusable UI components
│   ├── pages/
│   │   ├── Dash.jsx
│   │   └── RiskMap.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

The structure above is illustrative. Update it if your actual project contains additional files or folders.

## ⚙️ Prerequisites

Before running the application, ensure the following are installed:

- Node.js
- npm
- Visual Studio Code or another code editor
- A modern web browser

## 🚀 Installation and Setup

### 1. Clone the repository

If you have not already cloned the repository, run:

```bash
git clone https://github.com/Gaurv-iii/Landslide_Prediction_using_machine_learning.git
```

### 2. Navigate to the frontend directory

```bash
cd Landslide_Prediction_using_machine_learning/frontend
```

If you have already cloned the project, open a terminal in the existing project directory and run:

```bash
cd frontend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

Open the local URL displayed in the terminal. By default, Vite commonly uses:

```text
http://localhost:5173/
```

The application should now be accessible in your browser.

## 📸 Screenshots

Add screenshots of your actual running application in this section.

### Dashboard

<!-- Save your dashboard screenshot as screenshots/dashboard.png -->

![Dashboard Screenshot](./screenshots/dashboard.png)

### Landslide Risk Map

<!-- Save your risk map screenshot as screenshots/risk-map.png -->

![Risk Map Screenshot](./screenshots/risk-map.png)

### Prediction Interface

<!-- Save your prediction page screenshot as screenshots/prediction-page.png -->

![Prediction Interface Screenshot](./screenshots/prediction-page.png)

> To display these images on GitHub, create the `screenshots` folder inside `frontend` and add the corresponding image files. Until then, the image links will not display.

## 🧭 Application Workflow

1. The user opens the web application.
2. The user navigates through the dashboard, map, and prediction pages.
3. Relevant rainfall, geographical, or environmental information is displayed where available.
4. The user can interact with the prediction interface to enter the required inputs.
5. Once the backend and machine learning model are integrated, the interface can send inputs to the prediction service and display its response.

## 🔗 Backend and Machine Learning Integration

The frontend is intended to work with a backend service that handles data processing and communication with the landslide prediction model.

The planned integration may include:

- Sending prediction inputs to a backend API.
- Receiving predicted landslide risk results.
- Displaying model outputs through the dashboard.
- Connecting geographical information with the map interface.
- Presenting appropriate risk levels based on the model response.

The actual prediction results depend on the trained model, available data, and completed backend integration.

## 🧪 Development and Testing

To verify that the frontend starts correctly, run:

```bash
npm run dev
```

To create a production build, run:

```bash
npm run build
```

To preview the production build locally, run:

```bash
npm run preview
```

## 🔮 Future Enhancements

- Integrate the trained Random Forest prediction model through a backend API.
- Display predicted risk levels using clearly labeled categories.
- Integrate verified rainfall and environmental datasets.
- Improve map visualization with validated geographical information.
- Add historical rainfall charts and relevant environmental indicators.
- Improve mobile responsiveness and accessibility.
- Add appropriate error handling and loading indicators.
- Integrate real-time data sources if reliable data access becomes available.

## ⚠️ Disclaimer

This project is being developed for academic and educational purposes. Predictions depend on the quality of the data, model performance, and validation process.

The application is not an official disaster-warning service. Its outputs should not be used as a substitute for official warnings or guidance from the relevant disaster management authorities.

## 👥 Contributors

- Project team: Uttarakhand Landslide Prediction and Early Warning System
- Frontend development: React.js, Vite, and Tailwind CSS

## 📄 License

Add the license selected by the project team. Until a license is chosen, no particular open-source license is implied.

---

**Project:** Uttarakhand Landslide Prediction and Early Warning System

**Module:** Frontend

**Status:** Under Development
