FROM node:latest@sha256:0b5559157d3624ff81040772faa056c6260345e6c749338effd9a9b878f49b3d

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3002

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
