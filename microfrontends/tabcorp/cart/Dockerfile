FROM node:8@sha256:09cf39a09c227a0c4f8df7b864fb1c32462166669172628f86cb45d87e7aac2f

RUN npm -g --unsafe-perm install elm
RUN npm -g install http-server

COPY elm-package.json .
RUN elm package install --yes
COPY . .

ENV PUBLIC_URL https://microfrontends.herokuapp.com/cart

RUN ./build.sh

CMD http-server -p $PORT dist
