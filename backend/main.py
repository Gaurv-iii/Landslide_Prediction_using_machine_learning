from pathlib import Path

import joblib
import pandas as pd
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field


# Locate the project and saved models
PROJECT_ROOT = Path(__file__).resolve().parent.parent
MODEL_DIR = PROJECT_ROOT / "ml" / "models"

LOGISTIC_MODEL_PATH = MODEL_DIR / "logistic_regression.pkl"
RANDOM_FOREST_PATH = MODEL_DIR / "random_forest.pkl"


# Load the trained models
if not LOGISTIC_MODEL_PATH.exists():
    raise FileNotFoundError(
        f"Logistic Regression model not found: {LOGISTIC_MODEL_PATH}"
    )

if not RANDOM_FOREST_PATH.exists():
    raise FileNotFoundError(
        f"Random Forest model not found: {RANDOM_FOREST_PATH}"
    )

logistic_model = joblib.load(LOGISTIC_MODEL_PATH)
random_forest_model = joblib.load(RANDOM_FOREST_PATH)


# Create the FastAPI application
app = FastAPI(
    title="Landslide Prediction API",
    description="API for the ML-based landslide classification project.",
    version="1.0.0",
)


# Allow requests from the React frontend during development.
# Add your actual frontend origin here if it uses a different port.
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=False,
    allow_methods=["GET", "POST"],
    allow_headers=["Content-Type"],
)


# Define the expected input data
class LandslideInput(BaseModel):
    rainfall_mm: float = Field(ge=0)
    slope_angle: float = Field(ge=0, le=90)
    soil_saturation: float = Field(ge=0, le=1)
    vegetation_cover: float = Field(ge=0, le=1)
    earthquake_activity: float = Field(ge=0)
    proximity_to_water: float = Field(ge=0)
    soil_type_gravel: int = Field(ge=0, le=1)
    soil_type_sand: int = Field(ge=0, le=1)
    soil_type_silt: int = Field(ge=0, le=1)
    soil_indicator_count: int = Field(ge=0, le=3)


FEATURE_COLUMNS = [
    "Rainfall_mm",
    "Slope_Angle",
    "Soil_Saturation",
    "Vegetation_Cover",
    "Earthquake_Activity",
    "Proximity_to_Water",
    "Soil_Type_Gravel",
    "Soil_Type_Sand",
    "Soil_Type_Silt",
    "Soil_Indicator_Count",
]


def create_input_dataframe(data: LandslideInput) -> pd.DataFrame:
    """Convert API input into the feature format used during training."""

    input_data = pd.DataFrame(
        [
            {
                "Rainfall_mm": data.rainfall_mm,
                "Slope_Angle": data.slope_angle,
                "Soil_Saturation": data.soil_saturation,
                "Vegetation_Cover": data.vegetation_cover,
                "Earthquake_Activity": data.earthquake_activity,
                "Proximity_to_Water": data.proximity_to_water,
                "Soil_Type_Gravel": data.soil_type_gravel,
                "Soil_Type_Sand": data.soil_type_sand,
                "Soil_Type_Silt": data.soil_type_silt,
                "Soil_Indicator_Count": data.soil_indicator_count,
            }
        ],
        columns=FEATURE_COLUMNS,
    )

    return input_data


@app.get("/")
def home():
    return {
        "message": "Landslide Prediction API is running",
        "docs": "/docs",
    }


@app.get("/health")
def health():
    return {
        "status": "healthy",
        "models_loaded": True,
    }


@app.post("/predict")
def predict_landslide(data: LandslideInput):
    input_data = create_input_dataframe(data)

    # Generate predictions
    lr_prediction = int(logistic_model.predict(input_data)[0])
    rf_prediction = int(random_forest_model.predict(input_data)[0])

    # Calculate estimated probabilities for the positive class
    lr_probability = float(
        logistic_model.predict_proba(input_data)[0][1]
    )
    rf_probability = float(
        random_forest_model.predict_proba(input_data)[0][1]
    )

    return {
       "input": data.dict(),
        "logistic_regression": {
            "prediction": lr_prediction,
            "predicted_class": (
                "Landslide" if lr_prediction == 1 else "No Landslide"
            ),
            "estimated_positive_class_probability": lr_probability,
        },
        "random_forest": {
            "prediction": rf_prediction,
            "predicted_class": (
                "Landslide" if rf_prediction == 1 else "No Landslide"
            ),
            "estimated_positive_class_probability": rf_probability,
        },
        "note": (
            "These are classifications from the current demonstration "
            "dataset, not validated real-world landslide warnings."
        ),
    }