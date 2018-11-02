FROM node:latest@sha256:e02c9963a48fe3b7e134ebfaf8aca75fef7f4988234c8c48aa84ec9294d35942

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3002

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
