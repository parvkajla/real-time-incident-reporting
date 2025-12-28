from pydantic import BaseModel
from datetime import datetime


class IncidentCreate(BaseModel):
    type: str
    description: str
    location: str
    severity: str


class IncidentOut(BaseModel):
    id: int
    type: str
    description: str
    location: str
    severity: str
    status: str
    created_at: datetime

    class Config:
        from_attributes = True
