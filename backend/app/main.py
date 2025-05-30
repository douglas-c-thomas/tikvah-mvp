from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import providers

app = FastAPI()

# CORS config for frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Update with frontend origin in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routers
app.include_router(providers.router, prefix="/providers")

