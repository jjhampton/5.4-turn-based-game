#!/usr/bin/env bash

set -e

if [[ -d .git && `git config --get remote.origin.url` == *"jacobthemyth/cool-scaffolding"* ]]; then
  echo "Deleting cloned git repository"
  rm -rf .git
fi

if [ ! -d .git ]; then
  echo "Initializing git repository"
  git init
  git add .
  git commit -m "Initial commit"
fi

if hash hub 2>/dev/null; then
  echo "Creating repository on GitHub"
  hub create
fi

hascommits=$(git ls-remote origin master)
if [ -z "$hascommits" ]; then
  echo "Pushing to GitHub"
  git push -u origin master
fi

if hash bower 2>/dev/null; then
  echo "Installing bower components from bower.json"
  bower install
fi

if hash npm 2>/dev/null; then
  echo "Installing node modules from package.json"
  npm install
fi

echo "Deleting setup script"
rm -- "$0"
