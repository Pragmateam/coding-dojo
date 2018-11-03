FROM node:latest@sha256:358182e976047c3f8aa77bdad32dd9355578a0e7c0601f4c263b40c80c7c66ac

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3002

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
