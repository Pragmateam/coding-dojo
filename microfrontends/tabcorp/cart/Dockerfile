FROM node:8@sha256:dd2381fe1f68df03a058094097886cd96b24a47724ff5a588b90921f13e875b7

RUN npm -g --unsafe-perm install elm
RUN npm -g install http-server

COPY elm-package.json .
RUN elm package install --yes
COPY . .

ENV PUBLIC_URL https://microfrontends.herokuapp.com/cart

RUN ./build.sh

CMD http-server -p $PORT dist
