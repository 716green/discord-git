# discord-git

## init a new git project

```bash

echo "# project-name" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:<username>/<repo-name>.git
git push -u origin main

```

## general workflow (save + push new commit)

```bash

git add .
git commit -m "some message"
git push

```
