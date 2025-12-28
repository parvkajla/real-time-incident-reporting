from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List

from app.core.database import get_db
from app.models.incident import Incident
from app.schemas.incident import IncidentCreate, IncidentOut

router = APIRouter(
    prefix="/incidents",
    tags=["Incidents"]
)

# ---------------- CREATE INCIDENT ----------------
@router.post("/", response_model=IncidentOut)
def create_incident(
    incident: IncidentCreate,
    db: Session = Depends(get_db)
):
    db_incident = Incident(
        type=incident.type,
        description=incident.description,
        location=incident.location,
        severity=incident.severity.capitalize(),  # normalize
        status="Pending"
    )

    db.add(db_incident)
    db.commit()
    db.refresh(db_incident)
    return db_incident


# ---------------- GET ALL INCIDENTS ----------------
@router.get("/", response_model=List[IncidentOut])
def get_all_incidents(db: Session = Depends(get_db)):
    return (
        db.query(Incident)
        .order_by(Incident.id.desc())
        .all()
    )
