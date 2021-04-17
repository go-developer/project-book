#!/usr/bin/env sh

# abort on errors
set -e

echo "开始构建"

# build
./node_modules/vuepress/cli.js build docs

echo "构建完成"

# navigate into the build output directory
# cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

# git init
# git add -A
# git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

# cd -
