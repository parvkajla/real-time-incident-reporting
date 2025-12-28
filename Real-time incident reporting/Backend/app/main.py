from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.database import engine
from app.models.incident import Incident
from app.api.routes import incidents

Incident.metadata.create_all(bind=engine)

app = FastAPI(title="Real-Time Incident Reporting System")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(incidents.router)

@app.get("/")
def root():
    return {"status": "Backend running successfully"}
