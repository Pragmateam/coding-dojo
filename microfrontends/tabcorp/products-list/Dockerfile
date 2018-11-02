FROM node:latest@sha256:e17a990b19f2b031aee8a6c1d2905bf2a98a9a3579a9f13cfebc4a35bac2bbc5

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3002

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
