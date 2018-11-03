FROM node:latest@sha256:5c4aa42be8700d1249808eb6c9953c0a74e582b1c004cced82486b2733b38b8d

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3002

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
