FROM node:8@sha256:c39babecddcccec897e4f07dbe405a093e6a9bbe12ca34fd4ed1f8cfaf781929

RUN npm -g --unsafe-perm install elm
RUN npm -g install http-server

COPY elm-package.json .
RUN elm package install --yes
COPY . .

ENV PUBLIC_URL https://microfrontends.herokuapp.com/cart

RUN ./build.sh

CMD http-server -p $PORT dist
