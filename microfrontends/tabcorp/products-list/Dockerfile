FROM node:latest@sha256:0377a0244cdf32e39b85855d9180030e0a456667fe5c0e3e439b6556ea140232

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3002

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
