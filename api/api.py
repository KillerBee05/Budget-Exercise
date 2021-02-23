from flask import Flask, jsonify
import pyrebase
app = Flask(__name__)

config = {
    'apiKey': "AIzaSyC4XKkD1X31JGB5lB7tn6XEYgODo297n7Y",
    'authDomain': "yardzen-22b96.firebaseapp.com",
    'databaseURL': "https://yardzen-22b96-default-rtdb.firebaseio.com",
    'projectId': "yardzen-22b96",
    'storageBucket': "yardzen-22b96.appspot.com",
    'messagingSenderId': "915139000259",
    'appId': "1:915139000259:web:6a3ea1dfe2745c2849af76"
}

firebase = pyrebase.initialize_app(config)

db = firebase.database()
seed_ref = db.child('seeds')
# Getting errors trying to bring data back from firebase. Im not sure what I'm doing wrong
# errors are TypeError: Object of type set is not JSON serializable.
@app.route('/api/getItems', methods=['GET'])
def api():
        # return jsonify({"seeds": seed_ref})
        return {
          "seeds": [
            {
              "type": "GROUND_COVER",
              "name": "Gravel",
              "lowPrice": 200000,
              "highPrice": 400000
            },
            {
              "type": "GROUND_COVER",
              "name": "Pavers",
              "lowPrice": 400000,
              "highPrice": 800000
            },
            {
              "type": "GROUND_COVER",
              "name": "Turf",
              "lowPrice": 200000,
              "highPrice": 600000
            },
            {
              "type": "DECK_MATERIAL",
              "name": "Redwood",
              "lowPrice": 1200000,
              "highPrice": 1400000
            },
            {
              "type": "DECK_MATERIAL",
              "name": "Composite",
              "lowPrice": 400000,
              "highPrice": 1200000
            },
            {
              "type": "GROUND_COVER",
              "name": "Gravel",
              "lowPrice": 200000,
              "highPrice": 400000
            },
            {
              "type": "STRUCTURES",
              "name": "Pergola",
              "lowPrice": 1200000,
              "highPrice": 3000000
            },
            {
              "type": "STRUCTURES",
              "name": "Taj Mahal",
              "lowPrice": 200000,
              "highPrice": 600000
            },
            {
              "type": "STRUCTURES",
              "name": "Pirate Ship",
              "lowPrice": 400000,
              "highPrice": 1200000
            },
            {
              "type": "FENCING_AND_PRIVACY",
              "name": "Bamboo Shroud",
              "lowPrice": 300000,
              "highPrice": 500000
            },
            {
              "type": "FENCING_AND_PRIVACY",
              "name": "Plywood Fence",
              "lowPrice": 50000,
              "highPrice": 300000
            },
            {
              "type": "FENCING_AND_PRIVACY",
              "name": "Redwood Fence",
              "lowPrice": 300000,
              "highPrice": 1000000
            },
            {
              "type": "LIGHTING",
              "name": "Hanging lights",
              "lowPrice": 50000,
              "highPrice": 100000
            },
            {
              "type": "LIGHTING",
              "name": "Ground Lights",
              "lowPrice": 60000,
              "highPrice": 150000
            },
            {
              "type": "LIGHTING",
              "name": "Lanterns",
              "lowPrice": 150000,
              "highPrice": 3000000
            },
            {
              "type": "WATER_FEATURES",
              "name": "Fountain",
              "lowPrice": 2000000,
              "highPrice": 6000000
            },
            {
              "type": "WATER_FEATURES",
              "name": "Pool",
              "lowPrice": 6000000,
              "highPrice": 10000000
            }
          ]
        }
