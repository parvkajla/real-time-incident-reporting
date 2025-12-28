from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime
from app.core.database import Base


class Incident(Base):
    __tablename__ = "incidents"

    id = Column(Integer, primary_key=True, index=True)
    type = Column(String(100), nullable=False)
    description = Column(String(500), nullable=False)
    location = Column(String(200), nullable=False)
    severity = Column(String(20), nullable=False)
    status = Column(String(20), default="Pending")
    created_at = Column(DateTime, default=datetime.utcnow)
