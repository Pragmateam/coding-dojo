FROM node:latest@sha256:543bd3970e24a865313edbede74cbed8549e8fc99a35b97635ec22919017b081

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3002

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
