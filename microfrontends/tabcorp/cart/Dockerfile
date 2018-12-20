FROM node:8@sha256:5a9c6cf93c5ed21d151513c6e80cec8c339412bfc029f1806c40602a2a3e80a9

RUN npm -g --unsafe-perm install elm
RUN npm -g install http-server

COPY elm-package.json .
RUN elm package install --yes
COPY . .

ENV PUBLIC_URL https://microfrontends.herokuapp.com/cart

RUN ./build.sh

CMD http-server -p $PORT dist
