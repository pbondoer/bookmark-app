# Bookmark app

Simple bookmark front-end application written in React. It features fuzzy
searching, `localStorage`-backed data persistency, and cute kitten placeholders.

## 🚀 Quick-start

```bash
# Make sure you're using the right version of Node
# On Windows, you may need to pass the version to this command
nvm use

# Install dependencies
yarn

# Start a dev-server
yarn start

# Make a production bundle
yarn build

# Check source code for errors
yarn lint
```

## 🛠️ Build

This app uses [`parcel`](https://parceljs.org/) for bundling. It automatically
transpiles code from TypeScript and runs it through `babel` using the provided
configuration file.

## 🔍 Configuration

Everything is configured through environment variables, by providing a
[`.env`](https://parceljs.org/env.html) file.

## ✨ Code style

This project uses [`prettier`](https://prettier.io/) to enforce code style. A
husky pre-commit hook has been configured to automatically format the code.
