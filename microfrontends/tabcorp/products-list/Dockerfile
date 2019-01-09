FROM node:latest@sha256:83fb9f38f66f426b418d1ae62dfed6731de69aaa864a6ff1deab30e3ac8fc74e

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3002

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
