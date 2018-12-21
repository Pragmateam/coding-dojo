FROM node:8@sha256:99eabb9e0762f86a95831c35eafd5e28a76f4b4922f30d12519c92599ac68f44

RUN npm -g --unsafe-perm install elm
RUN npm -g install http-server

COPY elm-package.json .
RUN elm package install --yes
COPY . .

ENV PUBLIC_URL https://microfrontends.herokuapp.com/cart

RUN ./build.sh

CMD http-server -p $PORT dist
