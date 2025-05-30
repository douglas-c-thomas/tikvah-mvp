from fastapi import APIRouter
from fastapi.responses import JSONResponse
import json
import os

router = APIRouter()

@router.get("/")
def get_providers():
    # DUG: Move this to a service
    file_path = os.path.join(os.path.dirname(__file__), "../mock_data/providers.json")
    with open(file_path, "r") as file:
        providers = json.load(file)
    return JSONResponse(content=providers)

