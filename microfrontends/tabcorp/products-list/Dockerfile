FROM node:latest@sha256:72c50a1f151cf0310fc5cae53daaa2220a06d4d64204dd2f2a15d1739be0180f

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL http://localhost:3002

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
