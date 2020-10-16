## Single SPA Research

A javascript router for front-end microservices
https://single-spa.js.org/

### How to Run

Run `npm run start` or `yarn start` in each folder after installing dependencies.
Then visit `http://localhost:9000`

For a better experience you can install browser dev tools: https://single-spa.js.org/docs/devtools/#installation-links

### Projects

Each folder/package is a separate folder and repo. For the sake of simplicity I do not create separate repos.

- Home
  Contains a simple hero component and consumes a function exported from util repo.
  For types please check tsconfig.json

- Util
  Contains shared methods.

- Root
  Wrapper application.

### Pre Commit Hook

I disabled that check for the sake of simplicity but it should be in place in actual repo.

```json
"husky": {
  "hooks": {
    "pre-commit": "pretty-quick --staged && concurrently npm:test npm:lint"
  }
},
```
