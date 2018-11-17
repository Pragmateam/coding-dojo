FROM node:latest@sha256:a460055da5eb18fac2f4f100639e3cfe15e9d02b2bcb1903c92ad2fc140c835c

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3002

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
