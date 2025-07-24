Act as a senior technical writer. Your task is to synthesize the three separate JSON analysis files below into a single, comprehensive documentation document for the file [FILENAME].

Your entire response MUST be a single Markdown document.

Save the output to a file named `[FILENAME].docs.md` in the same directory as the source file being analyzed.

## Input 1: Dependencies & Code Inventory JSON

- **Look at the attached dependencies and code inventory JSON file.**

## Input 2: Call Graph JSON

- **Look at the attached call graph JSON file.**

## Input 3: Architectural Analysis JSON

- **Look at the attached architectural analysis JSON file.**

# Part 2: Required Output

Follow these two steps to generate the final document:

First, combine the three JSON inputs above into a single, valid JSON object.

Then, generate the complete Markdown document below, using the combined JSON data to write the overview and embedding the combined JSON in the final section.

# Component Analysis: `[FILENAME]`

## 1. Comprehensive Overview

### Purpose and Role

_(Based on the combined analysis, provide a 2-3 sentence summary of what this component does and its role within the larger application.)_

### Core Functionality

_(Describe the main features or logic implemented in this file. Explain what happens when the primary functions or methods are called.)_

### Key Dependencies

_(List the most important external libraries or internal modules this component relies on and briefly explain why.)_

### Architectural Patterns & Notes

_(Summarize the key findings from the `architectural_notes`. Mention the design patterns used, any critical concerns, and the overall complexity.)_

---

## 2. Detailed Architectural Analysis (JSON)

This section contains the detailed, machine-readable analysis of the component.

```json
[PASTE THE NEWLY COMBINED JSON OBJECT HERE]
```
