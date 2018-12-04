FROM node:8@sha256:0fe5d182140baa744c84bb856d8cbabd7e1c4766d4a5ad4ef80e5656b0dd1be4

RUN npm -g --unsafe-perm install elm
RUN npm -g install http-server

COPY elm-package.json .
RUN elm package install --yes
COPY . .

ENV PUBLIC_URL https://microfrontends.herokuapp.com/cart

RUN ./build.sh

CMD http-server -p $PORT dist
