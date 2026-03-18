#!/bin/bash
echo "Running in: $(pwd)"
git config --global --unset-all user.mail
git config --global --unset-all user.email
git config --global --unset-all user.name

git config --global user.email "matteoluigitommasi@gmail.com"
git config --global user.name "Matteo Luigi Tommasi"

echo "User set to: $(git config --global user.name) <$(git config --global user.email)>"

