FROM node:latest@sha256:b5831920e5956339ddbbc9f42b104490668acd0745b668f9c6b69af828a4562f

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3002

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
