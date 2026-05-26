import joblib
import os
BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(__file__)))
model_path = os.path.join(BASE_DIR, "ml", "calorie_model.pkl")
model = joblib.load(model_path)