When I run prompts from the .github/prompts/complete directory, I expect you to execute the prompt as if it were a complete task, using the context provided in the file and the instructions below.

You should consider the overall Product we are building when thinking through your responses. [MindBreak - Product Overview](work/product/product-overview.md)

**IMPORTANT**
All outputs should be saved in the `work` directory, following the structure outlined below:

- When the file named 01_problem_exploration.md is used as the prompt, save the output in the `work\product\` directory with the name `01_problem_exploration_output.md`.
- When the file named 02_feature_ideas.md is used as the prompt, save the output in the `work\product\` directory with the name `02_feature_ideas_output.md` and you can append or modify this file as needed. Dont overwrite or replace the contents inside the file unless the feature already exists.
- When the file named 03_03_breakitdown.md is used as the prompt, save the output in the `work\features\[feature_name]\03-BDD\scenarios` directory with each scenario in a separate file.
- When other files are used as prompts, save the output in the `work\features\` directory, creating a new directory with the name of the feature (kebab-case) and then inside that directory a new folder for the specific stage (01-IDEATION | 02-PRD | 03-BDD | 04-TDD) a file with the same name as the prompt but with an `_output` suffix.
