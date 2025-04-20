# Bibliotecas
from fastapi import FastAPI, Query
from models.apod import APODResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi import HTTPException

from services.nasa import get_apod
from services.openai import get_fun_facts

# Criando a nossa aplicação
app = FastAPI()

# Configuração CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Criar as rotas da API: Home / APOD (Astronomy Picture Of the Day)
@app.get("/")
def root():
    return {
        "message": "Welcome to APOD - by Luis"
    }

@app.get("/apod", response_model=APODResponse)
async def apod(date: str = Query(default=None, description="Date in format YYYY-MM-DD")):
    data = await get_apod(date)
    return data

@app.post("/enlighten-me")
async def enlighten_me(data: dict):
    """
    Get fun facts about an astronomical image using OpenAI
    
    Args:
        data (dict): Contains 'description' and optional 'title' of the astronomical image
        
    Returns:
        dict: Fun facts about the image
    """
    description = data.get("description")
    title = data.get("title")
    
    if not description:
        raise HTTPException(status_code=400, detail="Missing description")
    
    fun_facts = await get_fun_facts(description, title)
    return fun_facts