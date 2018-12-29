FROM node:8@sha256:e989c4ebcd291522c1933d8b8bb5e2c96b2a3963e32cdab84e9f25eb7b5ef9cd

RUN npm -g --unsafe-perm install elm
RUN npm -g install http-server

COPY elm-package.json .
RUN elm package install --yes
COPY . .

ENV PUBLIC_URL https://microfrontends.herokuapp.com/cart

RUN ./build.sh

CMD http-server -p $PORT dist
