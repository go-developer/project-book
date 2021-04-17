#!/usr/bin/env sh

# abort on errors
set -e

echo "开始构建"

# build
yarn build docs

echo "构建完成"

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git remote add origin https://gitee.com/zhangdeman/project-book.git

git push --set-upstream origin master -f

git push -f
# navigate into the build output directory
# cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

# cd -
