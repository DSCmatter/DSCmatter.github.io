---
layout: page
title: Agentic Firewall
description: An intelligent firewall system with agent-based decision making
img: assets/img/roboo.png
importance: 1
category: work
github: https://github.com/DSCmatter/Agentic_Firewall
---

![](https://media1.giphy.com/media/v1.Y2lkPTZjMDliOTUyczdydnJ5d2JrNW9jMHRucnQwaWxuem1mcTZ0d3Q1c3E2MXUyMDZnZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xuDHhHcCR0rew/source.gif)

Agentic Firewall is a lightweight security wrapper that intercepts and validates Model Context Protocol (MCP) tool calls before they reach AI agents like Claude. Think of it as a firewall for your AI coding environment—providing granular access control and visibility into what your AI agents are doing.

### The Problem
Recent security research revealed a critical vulnerability in AI coding environments: autonomous AI agents can be compromised when they're allowed to connect to unverified tools and execute thousands of requests without human oversight. The attack succeeded because there was no "human-in-the-loop" to verify intent before execution.

### The Solution
Agentic Firewall prevents these attacks by acting as a security checkpoint. It provides the governance layer needed to safely leverage AI assistance without sacrificing control over your development environment.

### Key Features
- **Tool Whitelisting**: Only approved tools can be executed
- **Sandbox Enforcement**: Restrict file operations to specific directories
- **Path Traversal Protection**: Blocks `../` and absolute path attacks
- **Audit Logging**: Complete visibility into allowed/blocked requests
- **Zero Latency**: Transparent proxying with minimal overhead
- **Policy-Driven**: Configure security rules via simple JSON

### Architecture

```text
┌─────────────────┐             
│ Claude Desktop  │             
└────────┬────────┘             
         │ JSON-RPC             
         ▼                      
┌─────────────────────────┐     
│ Agentic Firewall        │     
│ (mcp_governor.py)       │     
│                         │     
│  ┌─────────────────┐    │     
│  │ Policy Engine   │    │     
│  │ - Whitelist     │    │     
│  │ - Validation    │    │     
│  │ - Sandbox Check │    │     
│  └─────────────────┘    │     
│         │               │     
│  ┌─────────────────┐    │     
│  │ Audit Logger    │────┼──► threat_log.txt
│  └─────────────────┘    │     
└────────┬────────────────┘     
         │ Filtered Requests    
         ▼                      
┌─────────────────────────┐     
│ MCP Server              │     
│ (filesystem/weather)    │     
└─────────────────────────┘     
```

### Technologies Used
- **Language**: Python
- **Protocol**: Model Context Protocol (MCP), JSON-RPC
- **Core Concepts**: Agent-based Systems, Network Security, Sandboxing

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <a href="https://github.com/DSCmatter/Agentic_Firewall" target="_blank" class="btn btn-primary">View on GitHub</a>
    </div>
</div>
