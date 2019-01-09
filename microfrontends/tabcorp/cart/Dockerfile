FROM node:8@sha256:d1a22a5daa90746ce18454fd456089de46382c5f92afc49677e07d15d901ed9a

RUN npm -g --unsafe-perm install elm
RUN npm -g install http-server

COPY elm-package.json .
RUN elm package install --yes
COPY . .

ENV PUBLIC_URL https://microfrontends.herokuapp.com/cart

RUN ./build.sh

CMD http-server -p $PORT dist
