FROM node:8@sha256:5aebe186c00da3308c8fde5b3a246d1927a56947a1b51f5c4308b7318adf74f4

RUN npm -g --unsafe-perm install elm
RUN npm -g install http-server

COPY elm-package.json .
RUN elm package install --yes
COPY . .

ENV PUBLIC_URL https://microfrontends.herokuapp.com/cart

RUN ./build.sh

CMD http-server -p $PORT dist
