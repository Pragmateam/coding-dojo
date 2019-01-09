FROM node:8@sha256:8f3dfd9995aa665a097d3950a7abc9c242c220c72ead6bdebec2254a26178b4d

RUN npm -g --unsafe-perm install elm
RUN npm -g install http-server

COPY elm-package.json .
RUN elm package install --yes
COPY . .

ENV PUBLIC_URL https://microfrontends.herokuapp.com/cart

RUN ./build.sh

CMD http-server -p $PORT dist
