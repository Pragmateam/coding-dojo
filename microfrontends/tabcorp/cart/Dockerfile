FROM node:8@sha256:024e3fddbd8fbc018ad7fe2430106dc27db070b52f4c7e960916241c2ca9e314

RUN npm -g --unsafe-perm install elm
RUN npm -g install http-server

COPY elm-package.json .
RUN elm package install --yes
COPY . .

ENV PUBLIC_URL https://microfrontends.herokuapp.com/cart

RUN ./build.sh

CMD http-server -p $PORT dist
