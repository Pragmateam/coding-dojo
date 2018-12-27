FROM node:latest@sha256:4c72dffa4199aa5e169650bc1a6513d3e0b578d4a879b4b29e12bd9fabacb395

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3002

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
