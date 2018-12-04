FROM node:8@sha256:fecc38a3579eb06c9e447a1172b8ce703a8d4d8f122c938128dd81ef5de76ab3

RUN npm -g --unsafe-perm install elm
RUN npm -g install http-server

COPY elm-package.json .
RUN elm package install --yes
COPY . .

ENV PUBLIC_URL https://microfrontends.herokuapp.com/cart

RUN ./build.sh

CMD http-server -p $PORT dist
