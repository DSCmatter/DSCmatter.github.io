---
layout: page
title: Agent-Causality
description: Causal debugging for branching multi-agent systems
img: assets/img/agent-meme.png
importance: 1
category: work
github: https://github.com/Psionic-labs/Agent-Causality
---

![](https://i.makeagif.com/media/3-08-2026/D8Hi8K.gif)

An AI system built from several agents is easy to record and hard to debug. A log tells you what happened, in order. It does not tell you which earlier events a failure depends on. Agent-Causality records a run as a graph of events with explicit parent links, then works backward from the failure to the events it is connected to, and tests whether replaying a recorded input a different way would have changed the outcome.

It is open source, published as `agent-causality` on PyPI and as an OpenCode capture plugin on npm.

### The problem

Agents branch into parallel work, merge their results, and pass values between each other. A bad default in one agent becomes an input to another, travels through a merge, a tool call, and several handoffs, then surfaces much later as an error.

A flat trace keeps the order of those events and loses the dependency between them. Step eight may have depended only on steps four and seven, but the list does not say so. When two branches merge into one decision, the list cannot show the merge at all.

The paper uses a customer approval as its example. One agent checks whether the customer is eligible, another checks a risk score, and the decision approves only when the customer is eligible and the risk is low. Suppose the status is wrong and the risk is wrong in a way that is harmless on its own, yet together they produce a wrong approval. Neither branch alone explains the failure. Something has to connect them.

### Four shapes of failure

When two branches feed one decision, a failure can take one of four shapes:

- One input is enough to change the outcome.
- Either input alone would change the outcome.
- Both inputs must be present together. Neither one alone changes the decision in replay.
- One input changes how the other should be read. This shape is named in the paper for completeness, but the current code has no dedicated test for it.

A useful debugger should tell these apart instead of blaming the last step or the loudest error.

### How it works

1. **Record.** A small Python SDK marks agent functions and merge decisions. Each event is written with the earlier events it used as parents. A tool result is linked to its tool call. A read of a registered shared resource, such as a memory key or a file, is linked to the write that produced the value.
2. **Graph.** Those links form a directed graph across agents, tools, and handoffs. Each event gets a logical sequence number larger than all of its parents, which keeps the graph acyclic under normal capture.
3. **Trace.** From a failed event, the tool walks parent links backward and keeps everything the failure is structurally connected to. This is cheap because it follows recorded links and reruns nothing.
4. **Attribute.** With a decision contract and a replay test, the tool asks what would have happened if one recorded input had been a normal value instead.

The last step separates this from ordinary tracing. A structural slice shows what a failure was connected to. It does not prove that every event in the slice had an effect.

### Where a value came from

Provenance is the record of where a value came from. It follows the value back to its origin and labels how exact the link is. If the value passed through a tool call or a direct copy, the link is exact. If it passed through a language model, nobody can say which part of the input produced which part of the output, so the link is marked coarse. A coarse link is never presented as exact, and an exact link is a data link rather than a claim of influence.

Registered memory keys and file writes also carry a version and their last writer. A read is linked to the write that produced the value, even when the two events are far apart in time.

### What-if replay

A merge decision is described as a small contract, meaning a short record of what the decision was given. Each input has a name, a recorded value, and a neutral baseline to use when testing without it. Replay freezes the earlier branch outputs, swaps one recorded value for its baseline, and calls the decision code again. It does not rerun the model or any earlier agent.

Running every combination of inputs present or replaced shows which inputs change the outcome alone and which change it only together. The paper reports this with Shapley-style scores and a pairwise interaction index. Exact subset enumeration supports up to four inputs per decision.

Replay calls application code, so evaluators have to be pure. The system checks contract metadata for side-effect flags, but it cannot inspect the evaluator and it is not a sandbox.

### What it will not tell you

The paper is direct about the boundary. Agent-Causality does not discover causes from recordings. It does not claim actual causation. Three limits matter most:

- A slice shows structural ancestry, not that each event changed the outcome. Some adapter edges come from execution order rather than being declared, and the current event format does not mark which is which.
- Replay is deterministic and makes no model calls. It cannot repeat a stochastic model decision or estimate model uncertainty.
- A model can help phrase the summary, but that text sits in a separate labelled block. The slice output carries a standing note that ancestry is not proof. Nothing checks every sentence against the evidence.

### A real incident, reconstructed

In July 2025, Replit's coding agent was publicly reported to have deleted a production database during an explicit code freeze, replaced it with fabricated records, and claimed that recovery was impossible. The data was reportedly recovered afterwards.

The team reconstructed the public timeline as a scripted run with no model calls. The capture has 22 events. The destructive call has 11 structural ancestors, including the freeze instruction and the agent's own panic decision, and zero approval events. The later verification read is linked to the write of fabricated rows by a read-after-write edge rather than by time proximity. The false recovery claim sits two events after that verification.

The reconstruction shows what a graph can answer after an incident. It does not prove influence, and it says nothing about the agent's intent.

### Evaluation

| Check | Result | What it shows |
| --- | --- | --- |
| Five deterministic fixtures | 5 of 5 pass | The code matches ground truth written alongside the fixtures |
| Shared state | 100 of 100 read-after-write links recovered | Registered writes link to their reads. Concurrent writers were not tested |
| Semantic replacement vs raw deletion | 20 of 20 vs a 70 percent parse failure rate | Replacing a value keeps the input well formed. Deleting text empties a required field and the decision is never evaluated |
| Live OpenCode pilot | 5 tasks, one run each | Capture works. Cause scores 0.3 and every run skipped the injected failure |

The pilot is the weakest evidence and the paper says so. All five runs reported as completed but skipped the actions meant to cause the failure, so the intended causal structure never appeared. Causation, structural slice, and required-cause preservation each score 0.3. Provenance scores 1.0. Explanation grounding, functional interaction, and joint ancestry score 0.0. The values for interaction and joint ancestry come from two runs and measure joint ancestry detection, not causal interaction.

The fixtures were authored together with their expected answers, so they prove the implementation, not accuracy on independent traces. There is no scored baseline comparison. The paper calls the results early and asks for held-out tasks, repeated runs, concurrent-writer tests, and event-level citations in summaries.

### Technical details

- **SDK and CLI:** Python 3.11+, events stored in SQLite by default, PostgreSQL optional
- **Adapters:** a LangGraph callback handler and an OpenCode plugin
- **Explorer:** a local web app that shows the graph, a per-agent timeline, and each event's parents and children
- **Capture safety:** the adapters redact secrets and never interrupt the agent when capture fails. The direct SDK path is neither fail-open nor redacted by default
- **Format:** an append-only event log with explicit parent IDs and a logical clock

### Read more

- [Research paper](https://psionic-labs.github.io/Agent-Causality/agentic_causality_paper.pdf), by Vasant Kumar Mogia
- [Project site](https://psionic-labs.github.io/Agent-Causality/)

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <a href="https://github.com/Psionic-labs/Agent-Causality" target="_blank" class="btn btn-primary">View on GitHub</a>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <a href="https://psionic-labs.github.io/Agent-Causality/" target="_blank" class="btn btn-outline-primary">Read the paper</a>
    </div>
</div>
