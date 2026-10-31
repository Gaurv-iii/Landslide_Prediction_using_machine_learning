import { useState } from "react";

const API_URL = "http://127.0.0.1:8000/predict";

const districts = [
  "Almora",
  "Bageshwar",
  "Chamoli",
  "Champawat",
  "Dehradun",
  "Haridwar",
  "Nainital",
  "Pauri Garhwal",
  "Pithoragarh",
  "Rudraprayag",
  "Tehri Garhwal",
  "Udham Singh Nagar",
  "Uttarkashi",
];

const initialFormData = {
  district: "",
  rainfall24: "",
  rainfall3: "",
  rainfall7: "",
  slope: "",
  elevation: "",
  soilSaturation: "",
  vegetationCover: "",
  earthquakeActivity: "",
  proximityToWater: "",
  soilType: "",
};

function Prediction() {
  const [formData, setFormData] = useState(initialFormData);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setResult(null);
    setError("");
    setLoading(true);

    try {
      // Convert the selected soil type into the three
      // indicator columns expected by the trained models.
      const soilType = formData.soilType;

      const payload = {
        rainfall_mm: Number(formData.rainfall24),
        slope_angle: Number(formData.slope),
        soil_saturation: Number(formData.soilSaturation),
        vegetation_cover: Number(formData.vegetationCover),
        earthquake_activity: Number(formData.earthquakeActivity),
        proximity_to_water: Number(formData.proximityToWater),

        soil_type_gravel: soilType === "Gravel" ? 1 : 0,
        soil_type_sand: soilType === "Sand" ? 1 : 0,
        soil_type_silt: soilType === "Silt" ? 1 : 0,

        soil_indicator_count: soilType ? 1 : 0,
      };

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const responseData = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          responseData?.detail
            ? JSON.stringify(responseData.detail)
            : `Prediction failed with status ${response.status}.`
        );
      }

      setResult(responseData);
    } catch (err) {
      setError(
        err instanceof TypeError
          ? "Could not connect to the prediction API. Check that FastAPI is running at http://127.0.0.1:8000 and that CORS is configured."
          : err.message || "Something went wrong while generating the prediction."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#F8F7F4] px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#D77A5D]">
          Machine Learning
        </p>

        <h1 className="mt-2 text-4xl font-bold text-[#173D2A]">
          Landslide Risk Prediction
        </h1>

        <p className="mt-4 text-gray-600">
          Enter environmental conditions to obtain experimental
          classifications from the trained machine learning models.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 rounded-2xl bg-white p-8 shadow"
        >
          <h2 className="mb-6 text-xl font-semibold text-[#173D2A]">
            Location and environmental conditions
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="district"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                District
              </label>

              <select
                id="district"
                name="district"
                value={formData.district}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-[#D77A5D] focus:ring-1 focus:ring-[#D77A5D]"
              >
                <option value="">Select district</option>

                {districts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>

            <InputField
              name="rainfall24"
              label="Rainfall - 24 Hours (mm)"
              value={formData.rainfall24}
              onChange={handleChange}
              min="0"
              max="10000"
            />

            <InputField
              name="rainfall3"
              label="Rainfall - 3 Days (mm)"
              value={formData.rainfall3}
              onChange={handleChange}
              min="0"
              max="10000"
              required={false}
            />

            <InputField
              name="rainfall7"
              label="Rainfall - 7 Days (mm)"
              value={formData.rainfall7}
              onChange={handleChange}
              min="0"
              max="10000"
              required={false}
            />

            <InputField
              name="slope"
              label="Slope (degrees)"
              value={formData.slope}
              onChange={handleChange}
              min="0"
              max="90"
            />

            <InputField
              name="elevation"
              label="Elevation (meters)"
              value={formData.elevation}
              onChange={handleChange}
              min="0"
              max="10000"
              required={false}
            />

            <InputField
              name="soilSaturation"
              label="Soil Saturation (0–1)"
              value={formData.soilSaturation}
              onChange={handleChange}
              min="0"
              max="1"
              step="any"
              placeholder="Example: 0.8"
            />

            <InputField
              name="vegetationCover"
              label="Vegetation Cover (0–1)"
              value={formData.vegetationCover}
              onChange={handleChange}
              min="0"
              max="1"
              step="any"
              placeholder="Example: 0.6"
            />

            <InputField
              name="earthquakeActivity"
              label="Earthquake Activity (dataset scale)"
              value={formData.earthquakeActivity}
              onChange={handleChange}
              min="0"
              step="any"
              placeholder="Enter dataset-compatible value"
            />

            <InputField
              name="proximityToWater"
              label="Proximity to Water (dataset units)"
              value={formData.proximityToWater}
              onChange={handleChange}
              min="0"
              step="any"
              placeholder="Enter dataset-compatible value"
            />

            <div>
              <label
                htmlFor="soilType"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Soil Type
              </label>

              <select
                id="soilType"
                name="soilType"
                value={formData.soilType}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-[#D77A5D] focus:ring-1 focus:ring-[#D77A5D]"
              >
                <option value="">Select soil type</option>
                <option value="Gravel">Gravel</option>
                <option value="Sand">Sand</option>
                <option value="Silt">Silt</option>
              </select>
            </div>
          </div>

          <div className="mt-6 rounded-lg bg-amber-50 p-4 text-sm text-amber-900">
            <strong>Model compatibility:</strong> The current models use
            24-hour rainfall, slope, soil saturation, vegetation cover,
            earthquake activity, proximity to water, and soil-type
            indicators. Three-day rainfall, seven-day rainfall, elevation,
            and district are collected by the form but are not used by
            these models.
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-8 rounded-lg bg-[#173D2A] px-8 py-3 font-semibold text-white transition hover:bg-[#163626] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Generating Prediction..." : "Predict Risk"}
          </button>
        </form>

        {error && (
          <div
            role="alert"
            className="mt-8 rounded-xl border border-red-200 bg-red-50 p-5 text-red-700"
          >
            <h2 className="font-semibold">Prediction Error</h2>
            <p className="mt-2 break-words text-sm">{error}</p>
          </div>
        )}

        {result && (
          <section
            aria-live="polite"
            className="mt-8 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-[#D77A5D]">
              Prediction Results
            </p>

            <h2 className="mt-2 text-2xl font-bold text-[#173D2A]">
              Results for {formData.district}
            </h2>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <ModelResult
                title="Logistic Regression"
                model={result.logistic_regression}
              />

              <ModelResult
                title="Random Forest"
                model={result.random_forest}
              />
            </div>

            <div className="mt-6 rounded-xl bg-amber-50 p-5 text-sm text-amber-900">
              <h3 className="font-semibold">Important limitation</h3>
              <p className="mt-2">
                {result.note ||
                  "These predictions are experimental model classifications and are not validated real-world landslide warnings."}
              </p>
            </div>
          </section>
        )}

        {!result && !error && (
          <div className="mt-8 rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center">
            <p className="text-gray-500">
              Prediction results will appear here.
            </p>

            <p className="mt-2 text-sm text-gray-400">
              Submit the form to request predictions from both ML models.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function ModelResult({ title, model }) {
  if (!model) {
    return (
      <div className="rounded-xl border border-gray-200 p-5">
        <h3 className="font-semibold text-[#173D2A]">{title}</h3>
        <p className="mt-3 text-sm text-gray-600">
          No result was returned for this model.
        </p>
      </div>
    );
  }

  const probability = model.estimated_positive_class_probability;

  return (
    <div className="rounded-xl border border-gray-200 p-5">
      <h3 className="font-semibold text-[#173D2A]">{title}</h3>

      <p
        className={`mt-4 text-xl font-bold ${
          model.prediction === 1 ? "text-red-700" : "text-green-700"
        }`}
      >
        {model.predicted_class}
      </p>

      <p className="mt-3 text-sm text-gray-600">
        Model output: {model.prediction}
      </p>

      {typeof probability === "number" && (
        <p className="mt-2 break-words text-sm text-gray-600">
          Estimated positive-class probability:{" "}
          {probability.toExponential(3)}
        </p>
      )}
    </div>
  );
}

function InputField({
  name,
  label,
  value,
  onChange,
  min = "0",
  max,
  step = "any",
  required = true,
  placeholder = "Enter value",
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-semibold text-gray-700"
      >
        {label}
      </label>

      <input
        id={name}
        type="number"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        min={min}
        max={max}
        step={step}
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#D77A5D] focus:ring-1 focus:ring-[#D77A5D]"
      />
    </div>
  );
}

export default Prediction;