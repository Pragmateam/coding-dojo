FROM node:latest@sha256:d6a8cd069ab740759394a9338dc4bc4b9b32b15209cccd0c7faa32d438b1076e

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3002

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
