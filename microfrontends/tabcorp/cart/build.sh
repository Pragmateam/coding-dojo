mkdir -p dist
elm make Main.elm --output compiled.js
cat compiled.js bootstrap.js > dist/bundle.js
cat index.html | sed -e "s#dist#$PUBLIC_URL#" > dist/index.html
