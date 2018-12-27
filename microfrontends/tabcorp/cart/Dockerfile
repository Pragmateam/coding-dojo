FROM node:8@sha256:2e4d5f43975cab7d314701af31dc0d653397fab8db836e316c30ad7be8c201e0

RUN npm -g --unsafe-perm install elm
RUN npm -g install http-server

COPY elm-package.json .
RUN elm package install --yes
COPY . .

ENV PUBLIC_URL https://microfrontends.herokuapp.com/cart

RUN ./build.sh

CMD http-server -p $PORT dist
