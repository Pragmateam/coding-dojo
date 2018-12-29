FROM node:latest@sha256:9b6cdb52e2f86ce667f0dcc68b8dcc4e1e9be84b49111196cd4cf51081548692

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3002

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
