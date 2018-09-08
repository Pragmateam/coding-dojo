FROM node:latest@sha256:499dc14186a1f363c366f39aba4cf4e0a153aabc9ee3b5b5802dc6b29e3cef36

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3002

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
