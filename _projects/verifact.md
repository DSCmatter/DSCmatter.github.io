---
layout: page
title: VeriFact
description: AI-powered fact-checking system with evidence-backed explanations
img: assets/img/verifact.png
importance: 2
category: work
github: https://github.com/DarkenStars/VeriFact
---

![alt text](https://media2.giphy.com/media/v1.Y2lkPTZjMDliOTUyYTQyc2Exbjl3eXE1b3B0dW8yYzF1eWJqZXFnZmZoOXplb3BuemJtZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wkptZ8PiPM5SDH8049/giphy.gif)

A fact-checking system that verifies user claims with evidence-backed explanations using web searches and AI, delivering clear, transparent verdicts through a simple interface.

### Key Features
- **Explainable Verdicts**: Generates clear, evidence-based explanations with references to credible web sources
- **Machine Learning Integration**: Uses Sentence Transformers for semantic similarity and BART-MNLI for natural language inference (NLI)
- **Text Polishing**: Employs Pegasus-XSUM to rephrase explanations for clarity and readability
- **Efficient Caching**: Stores results in PostgreSQL to avoid redundant processing
- **Multi-Channel Access**: Web frontend (Vue.js), CLI, and Telegram bot integration
- **Scalable Backend**: FastAPI with async support for handling multiple concurrent requests
- **Web Search Integration**: Leverages Google Custom Search to retrieve relevant sources
- **Confidence Scoring**: Provides numerical confidence in claim assessment

### How It Works
1. **Claim Input**: Users submit claims via CLI, web interface, or Telegram bot
2. **Cache Check**: System queries PostgreSQL for cached results using normalized claim
3. **Web Search**: Google Custom Search API retrieves up to 10 relevant URLs
4. **Heuristic Analysis**: Scores search results using keyword-based heuristics
5. **Deep ML Analysis**: Uses Sentence Transformers and BART-MNLI to classify evidence as ENTAILMENT, CONTRADICTION, or NEUTRAL
6. **Verdict Fusion**: Combines heuristic and ML results for final verdict
7. **Explanation Generation**: Constructs factual explanation with supporting evidence
8. **Text Polishing**: Rephrases explanation using Pegasus-XSUM for clarity
9. **Response & Caching**: Returns verdict with confidence score and stores result in PostgreSQL

### Technologies Used
- **Backend**: FastAPI (Python)
- **ML Models**: PyTorch, Sentence Transformers, BART-MNLI, Pegasus-XSUM
- **Frontend**: Vue.js 3 + Vite
- **Database**: PostgreSQL
- **Web Scraping**: Trafilatura
- **Search**: Google Custom Search API
- **Additional**: Telegram bot integration, CLI interface

### Verdict Classifications
- **Likely True**: Strong evidence with supporting sources
- **Likely False**: Contradicting evidence from credible sources
- **Mixed/Uncertain**: Conflicting evidence or insufficient data

### Real-World Impact
- **HackIndore Achievement**: Ranked **7th out of 200 teams** at HackIndore hackathon
- **Paid Contract**: The project's success led to a paid development contract, validating the practical viability of the fact-checking system
- **Production-Ready**: Demonstrated capability to combat misinformation through an accessible, evidence-backed verification platform

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <a href="https://github.com/DarkenStars/VeriFact" target="_blank" class="btn btn-primary">View on GitHub</a>
    </div>
</div>
