#!/usr/bin/env sh
# abort on errors
set -e
# build
npm run build
# navigate into the build output directory
cd dist
# if you are deploying to a custom domain
echo 'www.gustavoreyes.io' > CNAME
#git init
git add -A
git commit -m 'deploy'
git push -f git@https://github.com/GarcGustavo/garcgustavo.rett.io
cd -