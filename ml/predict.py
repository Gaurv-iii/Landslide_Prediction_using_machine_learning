import os
import joblib
import pandas as pd

# Get the project root directory
PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Paths to the saved models
MODEL_DIR = os.path.join(PROJECT_ROOT, "ml", "models")

LOGISTIC_MODEL_PATH = os.path.join(MODEL_DIR, "logistic_regression.pkl")
RANDOM_FOREST_MODEL_PATH = os.path.join(MODEL_DIR, "random_forest.pkl")


def load_models():
    """Load the previously trained models."""
    logistic_model = joblib.load(LOGISTIC_MODEL_PATH)
    random_forest_model = joblib.load(RANDOM_FOREST_MODEL_PATH)

    return logistic_model, random_forest_model


def predict_landslide(input_data):
    """
    Predict landslide risk using the saved models.

    input_data must contain the same features used during model training.
    """
    logistic_model, random_forest_model = load_models()

    # Convert input data into a DataFrame
    input_df = pd.DataFrame([input_data])

    # Generate predictions
    logistic_prediction = int(logistic_model.predict(input_df)[0])
    random_forest_prediction = int(random_forest_model.predict(input_df)[0])

    return {
        "logistic_regression_prediction": logistic_prediction,
        "random_forest_prediction": random_forest_prediction,
    }