FROM node:latest@sha256:5f617eb3362baf18287e1a0e8d3af214c404a6304fa14b311c943cac1cc5bdcf

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3002

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
