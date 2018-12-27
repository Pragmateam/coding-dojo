FROM node:8@sha256:14472da5d940cc8c33cb784705fccf9ea8ab2e19acb7ceaeaaa92c45ef86b0e0

RUN npm -g --unsafe-perm install elm
RUN npm -g install http-server

COPY elm-package.json .
RUN elm package install --yes
COPY . .

ENV PUBLIC_URL https://microfrontends.herokuapp.com/cart

RUN ./build.sh

CMD http-server -p $PORT dist
