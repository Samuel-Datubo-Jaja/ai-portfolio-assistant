from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from openai import OpenAI
import os
from typing import Optional
import uuid
from dotenv import load_dotenv

# Load .env file - ADD THIS LINE
load_dotenv()


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://samueljaja.com", "https://samueljaja-gofl0qnlr-samuel-jajas-projects.vercel.app", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = OpenAI()

def load_personality():
    with open("me.txt", "r", encoding="utf-8") as f:
        return f.read().strip()

PERSONALITY = load_personality()

class ChatRequest(BaseModel):
    message: str
    session_id: Optional[str] = None

class ChatResponse(BaseModel):
    response: str
    session_id: str

@app.get("/")
async def root():
    return {"message": "Samuel Jaja AI Digital Twin API", "status": "active"}

@app.get("/health")
async def health():
    return {"status": "healthy"}

@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    try:
        session_id = request.session_id or str(uuid.uuid4())
        
        messages = [
            {"role": "system", "content": PERSONALITY},
            {"role": "user", "content": request.message},
        ]

        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=messages
        )

        return ChatResponse(
            response=response.choices[0].message.content,
            session_id=session_id
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("PORT", 8000)))