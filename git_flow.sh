#!/bin/bash

echo "Unsetting user.name and user.email..."
git config --unset user.name
git config --unset user.email

echo "Setting user.name and user.email..."
git config user.name "vinay000"
git config user.email "vky11504119@gmail.com"

echo "Adding all changes..."
git add .

echo "Committing with author..."
git commit --author="vinay000 <vky11504119@gmail.com>" -m "Setup Basic Flow"

echo "Pushing to main branch..."
git push origin main

echo "Done!"

