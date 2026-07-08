# Git Hands-on 2 – Using .gitignore

## Objective

- Understand the purpose of `.gitignore`.
- Learn how to ignore unwanted files and folders from being tracked by Git.

## Prerequisites

- Git installed and configured
- Existing local Git repository
- GitHub repository

## Files Created

- `.gitignore`
- `sample.log`
- `log/` folder
- `log/log.txt`

## .gitignore Configuration

The `.gitignore` file is configured to ignore:

- All files with the `.log` extension
- The `log` directory and all its contents

## Verification

After creating and configuring `.gitignore`:

- `sample.log` is ignored by Git.
- The `log/` folder is ignored by Git.
- Only the `.gitignore` file is tracked and committed.

The repository status confirms there are no pending changes after committing and pushing.

## Result

Successfully implemented `.gitignore` to prevent unnecessary log files and log directories from being tracked by Git. The configuration was committed and pushed to the GitHub repository successfully.
