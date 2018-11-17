FROM node:latest@sha256:2a4d7847682221a037c614c790d8d597e8a01a1745f6545ef06aebee79d8a225

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3002

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
