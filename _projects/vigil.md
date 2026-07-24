---
layout: page
title: Vigil
description: AI-first bug triage platform that turns real user sessions into developer-ready GitHub issues
img: assets/img/vigil.jpg
importance: 1
category: work
github: https://github.com/Psionic-labs/Vigil
---

![alt text](https://media.tenor.com/nCHqq_-6QdEAAAAM/observe-and-report-watch-closely.gif)

A full-stack observability platform that watches real user sessions, detects broken UX automatically, and turns failures into developer-ready GitHub issues. Vigil is not a session replay tool. Replay is evidence. The product is the AI triage loop that decides what is actually broken and writes the bug report for you.

### Key Features

- **Automatic Broken UX Detection**: Captures JS errors, network failures, rage clicks, and dead clicks as they happen in production
- **Cross-Session Deduplication**: Groups repeated failures across hundreds of sessions into a single issue instead of a flood of reports
- **AI-Generated Bug Reports**: Produces root cause analysis, reproduction steps, suggested fix, severity, and confidence score
- **GitHub Integration**: Raises pre-filled GitHub issues automatically, with optional auto-raise for high-confidence P0 and P1 bugs
- **Privacy-Conscious Architecture**: Raw session recordings never reach the AI. Only structured, fingerprinted event summaries do

### How It Works

1. **Capture**: A lightweight TypeScript SDK built on rrweb (about 25KB gzipped) records DOM mutations, JS exceptions, console errors, network failures, rage clicks, and dead clicks in the browser
2. **Ingest**: Events batch and flush every 5 seconds into a Hono backend. Each batch is validated and written inside a single Postgres transaction covering session state, summary events, and deterministic fingerprints
3. **Fingerprint**: Every signal gets a deterministic fingerprint before the AI ever runs, cutting noise and narrowing the search space to real candidate issues
4. **Triage**: An async worker assembles a compact JSON timeline per session and sends it to an LLM, which decides to create, attach, or ignore an issue and writes the full report
5. **Raise**: High-confidence issues are pushed to GitHub automatically, pre-filled with root cause, repro steps, and evidence

### Project Structure

- **SDK** (`packages/sdk`): Browser instrumentation library, thin wrapper around rrweb
- **API** (`apps/api`): Hono backend handling ingest, auth, the triage worker, and GitHub integration
- **Web** (`apps/web`): Next.js dashboard for issues, sessions, replay, and settings
- **Docs** (`docs/`): Architecture, data schema, product spec, and SDK contract

### Technologies Used

- **Frontend**: Next.js, Tailwind CSS
- **Backend**: Node.js, Hono
- **SDK**: TypeScript, rrweb
- **Database**: Neon (Postgres)
- **Storage**: Local disk in dev, R2/S3 in production, for gzipped replay blobs
- **AI**: OpenRouter for LLM routing and triage decisions
- **Integrations**: Octokit for GitHub issue creation and follow-up comments
- **Auth**: Better Auth
- **Build**: Turborepo, pnpm

### Technical Concepts Demonstrated

- **AI-Owned Product Decisions**: The AI makes the core create/attach/ignore triage call rather than acting as a summarization layer bolted onto existing tooling
- **Dual-Track Data Design**: Raw rrweb blobs are stored for replay only. Structured summary events are what the AI actually sees, bounding token cost and preventing PII leakage
- **Deterministic Fingerprinting Paired with AI Judgment**: Route, error, and stack-frame based fingerprints generate candidate groups that the AI then accepts, rejects, or overrides
- **Transactional Ingest with Async Heavy Work**: Postgres transactions guarantee consistency for session state while replay compression and AI triage run outside the request path
- **Session Timeout Reconciliation**: A background worker reconciles sessions that end without a final flush, using a partial Postgres index, and correctly un-abandons sessions on late-arriving flushes

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <a href="https://github.com/Psionic-labs/Vigil" target="_blank" class="btn btn-primary">View on GitHub</a>
    </div>
</div>
