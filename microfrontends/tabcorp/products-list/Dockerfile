FROM node:latest@sha256:9f9217a8216c2043157aa9d7846a0a608e43fa5532089d3f11d17be7a057a352

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3002

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
