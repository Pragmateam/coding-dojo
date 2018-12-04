FROM node:latest@sha256:9adb970e07fb6e6484acb50f8ce50bc10cd136b277057a72a584ffae26f8db46

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3002

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
