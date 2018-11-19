FROM node:latest@sha256:b3e51dcc345faf51da5111b65a075be0eeeabb1616385248f02f3b95445b459b

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3002

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
