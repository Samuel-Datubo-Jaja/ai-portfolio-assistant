---
title: "Building Production RAG Systems: Lessons from StructureGPT"
date: "2025-01-15"
excerpt: "A deep dive into architecting production-grade RAG systems for UK Building Regulations compliance, covering LLM fine-tuning, vector databases, and evaluation metrics."
tags: ["RAG", "LLM", "Production AI", "Python"]
---

## Introduction

When building StructureGPT, a RAG system for UK Building Regulations compliance, I learned that production AI systems require much more than just connecting an LLM to a vector database. Here's what I discovered.

## Architecture Overview

The system consists of three main components:

1. **Document Processing Pipeline**: Chunking and embedding building regulations
2. **Retrieval System**: ChromaDB for similarity search
3. **Generation Layer**: Fine-tuned LLaMA-3.1-8b with LoRA
```python
from langchain.embeddings import HuggingFaceEmbeddings
from chromadb import Client

# Initialize embeddings
embeddings = HuggingFaceEmbeddings(
    model_name="sentence-transformers/all-MiniLM-L6-v2"
)

# Setup vector store
client = Client()
collection = client.create_collection("building_regs")