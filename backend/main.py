# Bibliotecas
from fastapi import FastAPI, Query
from models.apod import APODResponse
from services.nasa import get_apod
from fastapi.middleware.cors import CORSMiddleware

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