
import { useState } from "react";

function Prediction() {

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

  const [formData, setFormData] = useState({
    district: "",
    rainfall24: "",
    rainfall3: "",
    rainfall7: "",
    slope: "",
    elevation: "",
  });


  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }


  function handleSubmit(event) {
    event.preventDefault();

    console.log("Prediction Input:", formData);

    // ML API will be connected here later
  }


  return (
    <div className="min-h-screen bg-[#F8F7F4] px-6 py-32">

      <div className="mx-auto max-w-5xl">

        {/* ================= HEADER ================= */}

        <p className="text-sm font-semibold uppercase tracking-widest text-[#D77A5D]">
          Machine Learning
        </p>

        <h1 className="mt-2 text-4xl font-bold text-[#173D2A]">
          Landslide Risk Prediction
        </h1>

        <p className="mt-4 text-gray-600">
          Enter environmental conditions to estimate landslide probability.
        </p>


        {/* ================= FORM ================= */}

        <form
          onSubmit={handleSubmit}
          className="mt-10 rounded-2xl bg-white p-8 shadow"
        >

          <div className="grid gap-6 md:grid-cols-2">


            {/* District Dropdown */}

            <div>

              <label className="mb-2 block text-sm font-semibold text-gray-700">
                District
              </label>

              <select
                name="district"
                value={formData.district}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-[#D77A5D] focus:ring-1 focus:ring-[#D77A5D]"
              >

                <option value="">
                  Select district
                </option>

                {districts.map((district) => (
                  <option
                    key={district}
                    value={district}
                  >
                    {district}
                  </option>
                ))}

              </select>

            </div>


            {/* Rainfall 24 Hours */}

            <InputField
              name="rainfall24"
              label="Rainfall - 24 Hours (mm)"
              placeholder="Enter rainfall"
              value={formData.rainfall24}
              onChange={handleChange}
            />


            {/* Rainfall 3 Days */}

            <InputField
              name="rainfall3"
              label="Rainfall - 3 Days (mm)"
              placeholder="Enter rainfall"
              value={formData.rainfall3}
              onChange={handleChange}
            />


            {/* Rainfall 7 Days */}

            <InputField
              name="rainfall7"
              label="Rainfall - 7 Days (mm)"
              placeholder="Enter rainfall"
              value={formData.rainfall7}
              onChange={handleChange}
            />


            {/* Slope */}

            <InputField
              name="slope"
              label="Slope (degrees)"
              placeholder="Enter slope"
              value={formData.slope}
              onChange={handleChange}
            />


            {/* Elevation */}

            <InputField
              name="elevation"
              label="Elevation (meters)"
              placeholder="Enter elevation"
              value={formData.elevation}
              onChange={handleChange}
            />

          </div>


          {/* ================= BUTTON ================= */}

          <button
            type="submit"
            className="mt-8 rounded-lg bg-[#173D2A] px-8 py-3 font-semibold text-white transition hover:bg-[#163626]"
          >
            Predict Risk
          </button>

        </form>


        {/* ================= RESULT ================= */}

        <div className="mt-8 rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center">

          <p className="text-gray-500">
            Prediction result will appear here.
          </p>

          <p className="mt-2 text-sm text-gray-400">
            ML model and SHAP explanation will be connected later.
          </p>

        </div>

      </div>

    </div>
  );
}


/* ================= INPUT COMPONENT ================= */

function InputField({
  name,
  label,
  placeholder,
  value,
  onChange,
}) {

  return (
    <div>

      <label className="mb-2 block text-sm font-semibold text-gray-700">
        {label}
      </label>

      <input
        type="number"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        min="0"
        step="any"
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#D77A5D] focus:ring-1 focus:ring-[#D77A5D]"
      />

    </div>
  );
}


export default Prediction;