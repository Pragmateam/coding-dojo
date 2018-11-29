FROM node:latest@sha256:643a4e2e42761fe9d43449dd8f82a6d34d40d40918d112501babb40b8b42bd1b

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3002

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
