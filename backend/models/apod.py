from pydantic import BaseModel

class APODResponse(BaseModel):
    title: str
    date: str
    explanation: str
    url: str
    media_type: str