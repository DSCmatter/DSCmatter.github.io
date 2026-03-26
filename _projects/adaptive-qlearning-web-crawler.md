---
layout: page
title: Adaptive Q-Learning Web Crawler
description: A hybrid reinforcement learning system combining Q-Learning, Contextual Bandits, and Graph Neural Networks for intelligent focused web crawling
img: assets/img/web-crawler.png
importance: 2
category: work
github: https://github.com/DSCmatter/adaptive-qlearning-web-crawler
---

![alt text](https://media0.giphy.com/media/v1.Y2lkPTZjMDliOTUyOWxxcWhodnFjMXQwYmtqMjhubGU2b2hyMjh4bWRqeGNnODk0ZTIwZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/aUPfvs5MOXpxm/200w.gif)

A novel hybrid approach to focused web crawling that combines three complementary AI techniques for intelligent link selection and web navigation.

### Key Features
- **Hybrid RL Architecture**: Integrates Q-Learning, Contextual Bandits (LinUCB), and Graph Neural Networks (GNNs)
- **Graph-Aware Navigation**: GraphSAGE-based node embeddings capture web topology and structural information
- **Intelligent Link Selection**: LinUCB bandit algorithm balances exploration-exploitation for efficient link discovery
- **Value-Based Learning**: Q-Learning provides long-term navigation strategy and reward optimization
- **Contextual Decisions**: Fast convergence using contextual information from web graph structure
- **Research-Backed**: Based on peer-reviewed papers on RL-based web crawling and focused crawlers
- **Student-Friendly**: $0.10 total cost, CPU-only, no GPU required, 60-70% harvest rate

### How It Works
1. **Graph Construction**: Builds web graph from seed URLs with node/edge features
2. **GNN Pre-training**: GraphSAGE learns structural embeddings from web topology (frozen for stability)
3. **Q-Agent Training**: Learns navigation strategy through offline simulation environment
4. **Link Selection**: LinUCB contextual bandit selects promising links with exploration-exploitation balance
5. **Reward Signal**: Positive rewards for target-domain discoveries, penalties for inefficient navigation
6. **Adaptive Crawling**: System dynamically improves link selection based on cumulative rewards

### How it works (simple)
Think of it like a person browsing Wikipedia trying to stay on the topic of Machine Learning.

GNN — gives the crawler a map of where it is. "I'm in this neighborhood of the web, these pages are nearby." Frozen after training, just used for context.
Bandit (LinUCB) — when the crawler sees 50 links on a page, this picks the best one. Like a slot machine learner, it balances "go with what's worked before" vs "try something new."
Q-Learning — the boss layer. After each page, it decides: keep going or stop? Prevents the crawler from going down rabbit holes and wasting time.

### The loop

visit page → look at links → Q-agent says continue → bandit picks best link → visit that page → repeat

### Technologies Used
- **Reinforcement Learning**: Q-Learning, Contextual Bandits (LinUCB)
- **Graph Neural Networks**: PyTorch, GraphSAGE (SAGEConv)
- **Framework**: PyTorch for deep learning
- **Web Technology**: HTTP crawling, BeautifulSoup for HTML parsing
- **Data Processing**: Pandas, NumPy for preprocessing
- **Language**: Python (100% of codebase)

### Research Foundation
Based on peer-reviewed research papers:
- Tree-based Focused Web Crawling with Reinforcement Learning (2021)
- Deep Reinforcement Learning for Web Crawling (2021)
- Efficient Deep Web Crawling Using Reinforcement Learning (2010) - 59 citations
- Learning to Crawl Deep Web (2013) - 71 citations

### Performance Metrics
- **Coverage**: 60-70% harvest rate (publishable results)
- **Efficiency**: High coverage with minimal crawl cost through adaptive link selection
- **Training**: 3-4 days on CPU only (runs overnight on standard laptops)
- **Resource Usage**: 8GB RAM sufficient, works on older hardware
- **Convergence**: Fast convergence through contextual information from graph structure

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <a href="https://github.com/DSCmatter/adaptive-qlearning-web-crawler" target="_blank" class="btn btn-primary">View on GitHub</a>
    </div>
</div>
