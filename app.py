from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/get-recommendations', methods=['POST'])
def get_recommendations():
    data = request.json
    total_gallons = data['totalGallons']
    # Mock recommendations logic based on total_gallons
    recommendations = ["Take shorter showers", "Fix leaks promptly", "Use water-saving devices"]
    return jsonify({"recommendations": recommendations})

if __name__ == '__main__':
    app.run(debug=True)
