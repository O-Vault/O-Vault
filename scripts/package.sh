set -ex
echo Cleaning directories..
rm -rf ./web/dist/
rm -rf ./electron/web/
rm -rf ./dist/
rm -rf ./electron/js/
rm -rf ./lib/dist/
echo npm install...
npm run install:all
echo Linting...
npm --prefix ./lib run lint
npm --prefix ./web run lint
npm --prefix ./electron run lint
echo Testing...
npm --prefix ./lib test
echo Building...
npm --prefix ./lib run build
npm --prefix ./web run build
npm --prefix ./electron run build
cp -r web/dist/ ./electron/web/
echo Packaging...
if [[ $1 == "--mac" ]]; then
  npm --prefix ./electron run dist:mac
elif [[ $1 == "--win" ]]; then
  if [[ $2 == "--sign" ]]; then
    npm --prefix ./electron run dist:win:all:sign
  else
    npm --prefix ./electron run dist:win
  fi
else 
  npm --prefix ./electron run dist:linux
fi

echo Output folder: "$PWD/dist/"

