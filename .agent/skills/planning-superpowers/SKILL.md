---
name: planning-complex-tasks
description: "Generates bite-sized implementation plans (2-5 minute tasks) with exact file paths, complete code snippets, and verification steps. Use after design approval but before touching any code."
---

# Writing Implementation Plans

## When to use this skill
- When you have a validated design or spec.
- Before starting any implementation to ensure a clear path forward.
- To break down complex features into manageable, verifiable steps.

## Workflow
- [ ] Announce: "I'm using the planning-complex-tasks skill to create the implementation plan."
- [ ] Define the plan header (Goal, Architecture, Tech Stack).
- [ ] Break work into 2-5 minute tasks.
- [ ] For each task: Specify files, code, and verification commands.
- [ ] Save the plan to `docs/plans/`.

## Instructions

### 1. Task Granularity
Each task must be a single, discrete action: 
1. Write the failing test.
2. Run to verify failure.
3. Implement minimal code.
4. Run to verify pass.
5. Commit.

### 2. Plan Structure
Every plan must include:
- **Goal:** One-sentence summary.
- **Architecture:** 2-3 sentences on the approach.
- **Tech Stack:** Key libraries used.
- **Tasks:** Sequential numbered tasks with `### Task N` headers.

### 3. Technical Precision
- **Exact File Paths**: Never use relative or vague paths.
- **Complete Code**: Provide the full snippet to be implemented.
- **Verification Commands**: Include the exact command and **expected output** (e.g., "FAIL with 'module not found'").

### 4. Implementation Choice
After saving the plan, offer the user a choice:
- **Subagent-Driven**: Fast iteration within the current session.
- **Parallel Session**: Batch execution in a separate session/worktree.
