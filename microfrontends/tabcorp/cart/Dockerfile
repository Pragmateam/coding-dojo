FROM node:8@sha256:7ed12d4810ed02b8c908d554976062ae61f42db8252bb9e148da0bffb72fb086

RUN npm -g --unsafe-perm install elm
RUN npm -g install http-server

COPY elm-package.json .
RUN elm package install --yes
COPY . .

ENV PUBLIC_URL https://microfrontends.herokuapp.com/cart

RUN ./build.sh

CMD http-server -p $PORT dist
