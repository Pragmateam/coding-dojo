FROM node:latest@sha256:408aa127f75821c61e358e658872584aeae075fe5daeef2113b553bdca25e75e

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3002

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
