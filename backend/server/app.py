from flask import Flask, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from bson.json_util import dumps
import json

client = MongoClient("localhost", 27017)

db = client.superagents
app = Flask(__name__)

CORS(app)

# Define the collections
users_collection = db["users"]
agents_collection = db["agents"]
goals_collection = db["goals"]
communication_collection = db["communication"]

# User schema
user_schema = {
    "uid": str,
    "email": str,
    "isVerified": bool,
    "firstName": str,
    "lastName": str,
    "projectsOwning": [str],  # List of project IDs
    "projectsMembering": [str],  # List of project IDs
    "createdAt": str,
}

# Agents schema
agent_schema = {
    "id": str,
    "name": str,
    "title": str,
    "capabilities": [str],  # List of agent capabilities
}

# Goals schema
goal_schema = {
    "id": str,
    "userOwner": [str],  # List of user IDs
    "userMember": [str],  # List of user IDs
    "agents": [str],  # List of agent IDs
    "createdAt": str,
    "type": str,  # Ops / Project
    "category": str,  # marketing / entrepreneurship / holistic
    "functions": [str],  # List of functions
    "brief": dict,
}

# Communication schema
communication_schema = {
    "type": str,  # action / message
    "time": str,
    "title": str,
    "content": str,
}

# Insert documents
users_collection.insert_one(
    {
        "uid": "user1",
        "email": "user1@example.com",
        "isVerified": True,
        "firstName": "John",
        "lastName": "Doe",
        "projectsOwning": [],
        "projectsMembering": [],
        "createdAt": "2023-08-04",
    }
)

agents_collection.insert_one(
    {
        "id": "agent1",
        "name": "Agent Smith",
        "title": "Special Agent",
        "capabilities": ["Investigation", "Espionage"],
    }
)

goals_collection.insert_one(
    {
        "id": "goal1",
        "userOwner": ["user1"],
        "userMember": [],
        "agents": ["agent1"],
        "createdAt": "2023-08-04",
        "type": "Project",
        "category": "marketing",
        "functions": ["marketing", "sales"],
        "brief": {},
    }
)

communication_collection.insert_one(
    {
        "type": "action",
        "time": "2023-08-04 12:00:00",
        "title": "Action Item",
        "content": "Complete marketing research",
    }
)


if __name__ == "__main__":
    app.run()
