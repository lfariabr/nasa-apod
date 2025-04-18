import httpx
import os
from dotenv import load_dotenv

load_dotenv()
API_KEY = os.getenv("NASA_API_KEY")
BASE_URL = "https://api.nasa.gov/planetary/apod"

async def get_apod(date=None):

    params = {"api_key": API_KEY}

    if date:
        params["date"] = date

    async with httpx.AsyncClient() as client:
        response = await client.get(BASE_URL, params=params)
        
        response.raise_for_status()

        return response.json()



