1. Test out JSDoc VS Code extensions
2. Setup `package.json` script to generate docs
3. Investigate using it in pre-commit hook
4. Investigate using it in GitHub actions?
5. Consider the HTML approach
6. Consider the markdown approach
7. What about running JSDoc checks in pre-commit?

## OPTIONS

### OPTION 1

- Trigger the workflow on push
- Commit directly to the docs folder

**Pros**:

- Easy
- I can move on with my life

**Cons**:

- Commit history becomes a bit clogged with documentation updates
- Lose out on having the branch referenced in the commit

### OPTION 2

- Trigger on push
- Commit to another repo
  - Checkout both repos
  - Run JSDoc on original repo
  - Somehow commit those changed files to another repo (?)

**Pros**:

- Commit history is unclogged

**Cons**:

- Need to setup fairly broad permissions (or maybe fine grained tokens would be fine actually?)
- I don't actually know how I'd do this
- I shouldn't be spending this long on this, probably
