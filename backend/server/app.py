from flask import Flask, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from bson.json_util import dumps
import json

client = MongoClient("localhost", 27017)
db = client.superagents
talentsCol = db.talents
packsCol = db.packs

app = Flask(__name__)

CORS(app)


# Simulating a Database1
@app.route("/talents")
def get_talents():
    cursor = list(talentsCol.find())
    data = json.loads(dumps(cursor))
    return jsonify(data)


@app.route("/packs")
def get_packs():
    cursor = list(packsCol.find())
    data = json.loads(dumps(cursor))
    return jsonify(data)


if __name__ == "__main__":
    app.run()
