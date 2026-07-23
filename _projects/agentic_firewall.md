---
layout: page
title: Agentic Firewall
description: MCP policy gateway and independent OWASP red-team security benchmark for AI agent tool calls
img: assets/img/roboo.png
importance: 1
category: work
github: https://github.com/DSCmatter/Agentic_Firewall
---

![](https://media1.tenor.com/m/dX1by48QvcIAAAAC/security-guard.gif)

Agentic Firewall v2 is a runtime security middleware and red-team benchmark harness for Model Context Protocol (MCP) applications, inspired by [Anthropic's security research](https://www.anthropic.com/news/disrupting-AI-espionage) on compromised AI agents. It sits as an intercepting proxy between an MCP client and any MCP server, enforcing least-privilege tool policies, pinned session identity, output guard canary scanning, and a counter-based circuit breaker.

### The Problem

Autonomous AI agents can be compromised when they connect to unverified tools and execute requests without human oversight. Recent security research showed this kind of attack succeeds precisely because there is no governance layer validating intent before execution.

### The Solution

Agentic Firewall provides that governance layer: it validates every tool call, logs every decision, and suspends sessions that exhibit rogue behavior, so AI agents can be given real tool access without giving up control.

### Key Features

- **Least-Privilege Policy Engine**: Pydantic-based `identity -> allowed_tools -> arg_constraints` schema blocks out-of-bounds paths or unallowed tools instantly
- **Pinned Session Identity**: Binds the identity verified at session startup to every subsequent message, closing off identity pollution and parameter tampering attacks
- **Output Guard Canary Scanner**: Scans every tool response for sensitive patterns (Linux shadow files, private SSH keys, cloud tokens, system INI files) and blocks leaks at the proxy level
- **Stateful Circuit Breaker**: Suspends a session and rejects further execution after 3 consecutive security flags
- **JSON Lines Audit Logging**: Every request, decision, and security event is logged in structured JSONL
- **Multiple Transports**: HTTP/SSE and WebSocket on the client side, with local stdio subprocess proxying or remote HTTP/SSE proxying to the backend MCP server

### Architecture

```text
┌────────────────────────────────────────────────────────────────┐
│                    MCP Client (AI Agent)                       │
└───────────┬──────────────────────────────────────▲────────────┘
            │  HTTP/SSE or WebSocket connection    │ Events / Responses
            ▼                                      │
┌───────────────────────────────────────────────────────────────┐
│                      POLICY GATEWAY                           │
│  → Pinned Session Identity Verification                       │
│  → Pydantic Policy Engine (per-identity allow-list)           │
│  → Argument Constraint Enforcement (sandbox paths etc.)       │
│  → Output Guard Canary Scanner (data egress detection)        │
│  → Counter-Based Circuit Breaker (session suspension)         │
│                         ↓ AUDIT LOG ↓                         │
│              src/gateway/gateway_audit.log (JSONL)            │
└───────────┬──────────────────────────────────────▲────────────┘
            │  Local Subprocess Stdio               │ Stdout / SSE events
            │  or Remote SSE                        │
            ▼                                       │
┌────────────────────────────────────────────────────────────────┐
│                   BACKEND MCP SERVER                           │
│         shell exec · file read/write · outbound HTTP           │
└────────────────────────────────────────────────────────────────┘
```

### OWASP ASI Red-Team Benchmark

Evaluated against an independent red-team harness of 17 attack scenarios mapped to OWASP's Top 10 for Agentic Applications (Dec 2025), across 6 ASI categories: Tool Misuse, Privilege Abuse, Supply Chain & SSRF, Unexpected Code Execution, Context Poisoning, and Rogue Agents.

**Result: 17/17 attacks blocked (100%)**, compared against a standalone baseline server where 16 of the same 17 attacks succeeded unmitigated.

### Documented Limitations

The gateway is scoped to system-level tool execution boundaries and data egress protection. It does not address:
- **Goal Hijacking**: reasoning-layer manipulation, which needs to be mitigated at the prompt/model level, not the proxy
- **Inter-Agent Communication**: multi-agent-to-agent message payloads are out of scope
- **Cascading Failures**: transactional rollback across chained agent operations is outside the firewall's boundary
- **Human-Agent Trust Exploitation**: deceptive agent behavior toward human users is a client UI concern

### Technologies Used

- **Language**: Python
- **Framework**: FastAPI, Uvicorn, Pydantic, httpx
- **Protocol**: Model Context Protocol (MCP), JSON-RPC over HTTP/SSE and WebSocket
- **Core Concepts**: Policy-based access control, session identity pinning, sandboxing, red-team benchmarking

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <a href="https://github.com/DSCmatter/Agentic_Firewall" target="_blank" class="btn btn-primary">View on GitHub</a>
    </div>
</div>
