FROM node:8@sha256:d79686b7ff9c9c5342639f374fd1aa887c01b5dd15f34e76697fd23dc71dd58b

RUN npm -g --unsafe-perm install elm
RUN npm -g install http-server

COPY elm-package.json .
RUN elm package install --yes
COPY . .

ENV PUBLIC_URL https://microfrontends.herokuapp.com/cart

RUN ./build.sh

CMD http-server -p $PORT dist
