FROM node:8@sha256:6b2c3d78f4e77fb1ef1e3058affdd1d3ba0b319b5eaf479167672914e555e346

RUN npm -g --unsafe-perm install elm
RUN npm -g install http-server

COPY elm-package.json .
RUN elm package install --yes
COPY . .

ENV PUBLIC_URL https://microfrontends.herokuapp.com/cart

RUN ./build.sh

CMD http-server -p $PORT dist
