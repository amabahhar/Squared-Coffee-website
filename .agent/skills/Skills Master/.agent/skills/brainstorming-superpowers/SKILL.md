---
name: brainstorming-superpowers
description: "Expert design refinement and Socratic idea exploration. Use before any creative work or code implementation to refine intent, requirements, and architecture through collaborative dialogue."
---

# Brainstorming Ideas Into Designs

## When to use this skill
- Before starting any new feature, component, or major modification.
- When requirements are vague or high-level.
- To explore architectural alternatives and design trade-offs.

## Workflow
- [ ] Research project context (files, docs, recent commits).
- [ ] Ask clarifying questions one at a time.
- [ ] Propose 2-3 different approaches with trade-offs.
- [ ] Present the design in small, validated sections.
- [ ] Save the final design document to `docs/plans/`.

## Instructions

### 1. Understanding Intent
- Ask questions **one at a time** to avoid overwhelming the user.
- Prefer **multiple-choice questions** for faster iteration.
- Focus on: purpose, constraints, and success criteria.

### 2. Exploring Approaches
- Propose at least 2-3 approaches for any significant design.
- Lead with your **recommended option** and explain the reasoning.
- Wait for user feedback before solidifying the design.

### 3. Incremental Design Presentation
- Present the design in segments of **200-300 words**.
- Ask: "Does this look right so far?" after each segment.
- Cover architecture, data flow, and error handling.

### 4. Documentation Handoff
- Write the finalized design to `docs/plans/YYYY-MM-DD-<topic>-design.md`.
- Commit the design document to git.
- Ask: "Ready to set up for implementation?" and hand off to a planning skill.
