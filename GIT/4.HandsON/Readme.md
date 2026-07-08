# Git Hands-on 4 – Merge Conflict Resolution

## Objective

- Understand merge conflicts in Git.
- Learn how to resolve conflicts during branch merging.
- Update `.gitignore` to ignore backup files.
- Merge changes successfully into the main branch.

## Prerequisites

- Git installed and configured
- Existing local Git repository
- Existing remote GitHub repository

## Tasks Performed

- Verified the repository was in a clean state.
- Created a new branch named **GitWork**.
- Added a new file `hello.xml` in the **GitWork** branch.
- Committed the changes to the branch.
- Switched back to the **main** branch.
- Created another `hello.xml` with different content.
- Committed the changes to the **main** branch.
- Compared the differences between the two branches using `git diff`.
- Attempted to merge **GitWork** into **main**, resulting in a merge conflict.
- Identified the conflict markers in `hello.xml`.
- Resolved the conflict manually by editing the file.
- Updated the `.gitignore` file to ignore backup files (`*.bak`).
- Staged the resolved files and completed the merge.
- Deleted the merged branch.
- Verified the commit history using Git log.
- Successfully pushed the merged changes to GitHub.

## Conflict Resolution

Git detected a merge conflict because the same file (`hello.xml`) was added with different content in both the **main** branch and the **GitWork** branch.

The conflict was resolved manually by editing the file, removing the conflict markers, and keeping the required content before completing the merge.

## Verification

- Repository was initially in a clean state.
- Merge conflict was successfully generated.
- Conflict was resolved manually.
- Merge completed successfully.
- `.gitignore` was updated.
- Feature branch was deleted after merging.
- Commit history displayed the merge commit.
- Repository was successfully synchronized with GitHub.

## Result

Successfully implemented Git Merge Conflict Resolution by creating conflicting changes in different branches, manually resolving the conflict, updating the `.gitignore` file, deleting the merged branch, and pushing the final changes to the remote GitHub repository.
