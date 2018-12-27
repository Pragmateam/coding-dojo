FROM node:8@sha256:2e4d5f43975cab7d314701af31dc0d653397fab8db836e316c30ad7be8c201e0

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3000

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
