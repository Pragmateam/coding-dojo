FROM node:8@sha256:773480516f79e0948b02d7a06971b07bf76b08d706cf88a358b5b69dd4c83db0

RUN npm -g --unsafe-perm install elm
RUN npm -g install http-server

COPY elm-package.json .
RUN elm package install --yes
COPY . .

ENV PUBLIC_URL https://microfrontends.herokuapp.com/cart

RUN ./build.sh

CMD http-server -p $PORT dist
