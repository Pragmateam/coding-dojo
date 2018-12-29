FROM node:8@sha256:7b6b1a4354eaf970c9a4c6a0401f94bd57952e1c5fcfe264fc88abecea896002

RUN npm -g --unsafe-perm install elm
RUN npm -g install http-server

COPY elm-package.json .
RUN elm package install --yes
COPY . .

ENV PUBLIC_URL https://microfrontends.herokuapp.com/cart

RUN ./build.sh

CMD http-server -p $PORT dist
