FROM node:latest@sha256:5faaec4bbc4930152ba59f51efb68ee5849dabdec09d58412e36ac9d10e5e483

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3002

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
