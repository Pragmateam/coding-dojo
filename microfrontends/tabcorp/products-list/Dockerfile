FROM node:latest@sha256:7963d848677d0a965ad6ddce1d4dbc20f296fde327ae76f1d18d8330d3bcc959

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3002

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
