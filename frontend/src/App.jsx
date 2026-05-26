import { useState } from "react";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    Gender: 0,
    Age: "",
    Height: "",
    Weight: "",
    Duration: "",
    Heart_Rate: "",
    Body_Temp: ""
  });

  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: Number(e.target.value)
    });
  };

  const predictCalories = async () => {
    setLoading(true);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8001/predict/",
        formData
      );

      setPrediction(response.data.predicted_calories);

    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-6">

      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-10">

        {/* Header */}

        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-3">
            AI Fitness Coach
          </h1>

          <p className="text-gray-500 text-lg">
            Predict calories burned using Machine Learning
          </p>
        </div>

        {/* Form */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Gender
            </label>

            <select
              name="Gender"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value={0}>Male</option>
              <option value={1}>Female</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Age
            </label>

            <input
              type="number"
              name="Age"
              placeholder="Enter age"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Height (cm)
            </label>

            <input
              type="number"
              name="Height"
              placeholder="Enter height"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Weight (kg)
            </label>

            <input
              type="number"
              name="Weight"
              placeholder="Enter weight"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Workout Duration (mins)
            </label>

            <input
              type="number"
              name="Duration"
              placeholder="Enter duration"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Heart Rate
            </label>

            <input
              type="number"
              name="Heart_Rate"
              placeholder="Enter heart rate"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 font-semibold text-gray-700">
              Body Temperature
            </label>

            <input
              type="number"
              name="Body_Temp"
              placeholder="Enter body temperature"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </div>

        {/* Button */}

        <div className="mt-8 text-center">

          <button
            onClick={predictCalories}
            className="bg-black hover:bg-gray-800 transition-all text-white font-semibold px-10 py-4 rounded-2xl text-lg shadow-lg"
          >
            {loading ? "Predicting..." : "Predict Calories"}
          </button>

        </div>

        {/* Prediction Result */}

        {prediction && (
          <div className="mt-10 bg-gray-100 rounded-2xl p-8 text-center shadow-inner">

            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Predicted Calories Burned
            </h2>

            <p className="text-5xl font-extrabold text-black">
              {prediction.toFixed(2)}
            </p>

            <p className="mt-3 text-gray-500">
              calories
            </p>

          </div>
        )}

      </div>

    </div>
  );
}

export default App;