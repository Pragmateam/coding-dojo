FROM node:8@sha256:3ecf259bf23f8a75555cf0b92ac5ad3c746e7e2262e937a9bed9ca1685f8e1c7

RUN npm -g --unsafe-perm install elm
RUN npm -g install http-server

COPY elm-package.json .
RUN elm package install --yes
COPY . .

ENV PUBLIC_URL https://microfrontends.herokuapp.com/cart

RUN ./build.sh

CMD http-server -p $PORT dist
