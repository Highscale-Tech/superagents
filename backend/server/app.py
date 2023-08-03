from flask import Flask, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from bson.json_util import dumps
import json

client = MongoClient("localhost", 27017)

db = client.superagents
app = Flask(__name__)

CORS(app)


@app.route("/allAgents", ["GET"])
def get_talents():
    cursor = list(db.agents.find())
    data = json.loads(dumps(cursor))
    return jsonify(data)


@app.route("/allLogs", ["GET"])
def get_logs():
    cursor = list(db.logs.find())
    data = json.loads(dumps(cursor))
    return jsonify(data)


# Fetch current goals along with their progress
@app.route("/currentGoals", ["GET"])
def get_goals():
    cursor = list(db.goals.find())
    data = json.loads(dumps(cursor))
    return jsonify(data)

@app.route("/rethinkStrategy", ["POST"])
def rethinkStrategy():
    # send request to service

@app.route("/hireMorePeople", ["POST"])
def hireMore():
    # send request to service

if __name__ == "__main__":
    app.run()
