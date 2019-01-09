FROM node:8@sha256:5aebe186c00da3308c8fde5b3a246d1927a56947a1b51f5c4308b7318adf74f4

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3000

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
