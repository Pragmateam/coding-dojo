FROM node:8@sha256:c2bf519e9ccf3b24dbd2465cb5e2022f02e2d59c773df7cb1819fb9e665d6e85

RUN npm -g --unsafe-perm install elm
RUN npm -g install http-server

COPY elm-package.json .
RUN elm package install --yes
COPY . .

ENV PUBLIC_URL https://microfrontends.herokuapp.com/cart

RUN ./build.sh

CMD http-server -p $PORT dist
