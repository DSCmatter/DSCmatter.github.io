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

Research implementation of a focused web crawler that combines adaptive Q-learning, LinUCB contextual bandits, and graph neural network embeddings for topic-directed crawl decisions. The project is structured for reproducible experimentation, with seeded datasets, train/validation/test splits, model checkpoints, evaluation scripts, and phase reports all included under versioned project folders.

Paper: [Adaptive Q-Learning Web Crawler](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-UYKXd0AAAAJ&citation_for_view=-UYKXd0AAAAJ:u5HHmVD_uO8C) 

### Problem Statement

Focused web crawling tries to maximize the number of topic-relevant pages discovered under a limited crawl budget. Static policies such as random crawling, best-first heuristics, or PageRank-based traversal waste requests when topical relevance depends on page context, link anchor text, and graph structure. This project formulates crawling as a sequential decision problem: a Q-learning policy decides whether to continue or stop, a contextual bandit ranks candidate outgoing links when continuing, and a frozen GraphSAGE encoder supplies structural page embeddings from the bootstrap web graph.

### Key Features

- **Hybrid RL Architecture**: Combines Q-Learning for stop/continue decisions, LinUCB contextual bandits for link selection, and a frozen GraphSAGE encoder for structural context
- **69-Dimensional State Space**: GNN embeddings, budget remaining, relevant pages found, crawl depth, running reward, and exploration rate
- **174-Dimensional Link Context**: GNN embedding, URL features, content features, anchor text features, and graph features (in-degree, out-degree, PageRank)
- **Reward Shaping**: Rewards relevance and novel domains, penalizes duplicates, fetch time, and excessive depth
- **Reproducible Benchmark Suite**: Seven baselines compared under fixed seeds, with raw JSON and Markdown result tables committed to the repo

### How It Works (Simple Version)

Think of it like someone browsing Wikipedia while trying to stay on the topic of machine learning.

- **GNN** gives the crawler a map of where it is. "I'm in this neighborhood of the web, these pages are nearby." Frozen after pre-training, used only for context.
- **LinUCB bandit** picks the best link when the crawler sees a page full of candidates, balancing what has worked before against what's worth trying.
- **Q-Learning** is the boss layer. After each page, it decides whether to keep going or stop, which keeps the crawler from wandering down rabbit holes.

The loop: visit page → look at links → Q-agent decides continue or stop → bandit picks best link → visit that page → repeat.

### Technologies Used

- **Reinforcement Learning**: Q-Learning, Contextual Bandits (LinUCB)
- **Graph Neural Networks**: PyTorch, GraphSAGE (SAGEConv)
- **Data Processing**: Pandas, NumPy
- **Language**: Python

### Results

Canonical strict benchmark, run with `python experiments/evaluate_baseline.py --max-pages 10 --runs-per-seed 2 --max-seeds-per-topic 2 --random-seed 42`:

| Crawler | Harvest Rate | Avg Reward | Crawl Time (s) |
| --- | ---: | ---: | ---: |
| random | 0.108 | 0.55 | 21.84 |
| best_first | 0.133 | 0.84 | 22.50 |
| pagerank | 0.100 | 0.48 | 19.06 |
| pure_q | 0.958 | 11.21 | 2.77 |
| pure_bandit | 0.100 | 0.45 | 27.29 |
| hybrid_no_gnn | 1.000 | 11.72 | 2.56 |
| hybrid | 0.117 | 0.69 | 25.65 |

In this snapshot, `hybrid_no_gnn` is the strongest production policy, with `pure_q` as a reliable fallback. The full `hybrid` path (Q-learning plus LinUCB plus GNN together) is still experimental. Diagnostics show the second-step LinUCB selection repeatedly choosing irrelevant pages, which is an open problem rather than a finished result.

### Research Foundation

Grounded in prior work on RL-based focused crawling:
- Tree-based Focused Web Crawling with Reinforcement Learning, Kontogiannis et al., 2021
- Deep Reinforcement Learning for Web Crawling, Avrachenkov, Borkar, and Patil, 2021
- Efficient Deep Web Crawling Using Reinforcement Learning, Jiang et al., 2010
- Learning to Crawl Deep Web, Zheng et al., 2013

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <a href="https://github.com/DSCmatter/adaptive-qlearning-web-crawler" target="_blank" class="btn btn-primary">View on GitHub</a>
    </div>
</div>
