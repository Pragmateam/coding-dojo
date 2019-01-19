FROM node:latest@sha256:491424526a6556f7698c5d659b55f15d63b63a864c420a1f607d1a9d90b18a4a

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3002

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
